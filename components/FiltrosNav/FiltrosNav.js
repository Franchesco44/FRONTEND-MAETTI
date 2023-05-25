import Image from "next/image";
import styles from "./FiltrosNav.module.css"
import { useSelector, useDispatch } from "react-redux";
import {useEffect, useState, useRef} from "react"
import { setBusqueda } from "../../redux/propiedadesSlice/propiedadesSlice";
import { setBusquedaVehiculos, setLocalizacionVehiculos } from "../../redux/vehiculosSlice/vehiculosSlice";
import { setFilterOpen, setSugerencias } from "../../redux/filtrosSlice/filtrosSlice";

const FiltrosNav = () =>{
    const isTranslate = useSelector((state) => state.translate.value)
    const isVehiculo = useSelector((state) => state.vehiculos.isVehiculos)
    const vehiculos = useSelector((state) => state.vehiculos.data)
    const filterOpen = useSelector((state) => state.filter.isOpen)
    const sugerenciasOpen = useSelector((state) => state.filter.isSugerenciasOpen)
    const propiedades = useSelector((state)=> state.propiedades.data)
    const dispatch = useDispatch()

    const filterRef = useRef(null);
    const sugerenciasRef = useRef(null);

    const [options, setOptions] = useState(["any", 1, 2, 3, 4, 5, 6, 7, "8"])
    const [selected, setSelected] = useState("")

    const [MayorAMenor, setMayorAMenor] = useState(false)
    const [MenorAMayor, setMenorAMayor] = useState(false)
    const [mes, setMes] = useState(false)
    const [noche, setNoche] = useState(false)

    const [menorVehiculos, setMenorVehiculos] = useState(false)
    const [mayorVehiculos, setMayorVehiculos] = useState(false)

    const [ubicacionPropiedad, setUbicacionPropiedad] = useState("")

    const [filtro, setFiltro] = useState({
        min: 0,
        max: 0,
        orden: "",
        huespedes: "",
        renta: "",
        ubicacion: ""
    })

    const [filtroVehiculo, setFiltroVehiculo] = useState({
        min: 0,
        max: 0,
        orden: "",
        ubicacion: ""
    })

    const [ubicaciones, setUbicaciones] = useState([])
    const [ubicacionesFiltradas, setUbicacionesFiltradas] = useState(ubicaciones)
    const ubicacionesArray = []
    const [ubicacionVehiculo, setUbicacionVehiculo] = useState("")
    const [ubisVehiculos, setUbisVehiculos] = useState([])
    const [vehiculosFiltrados, setVehiculosFiltrados] = useState(ubisVehiculos)
    const vehiculosArray = [] 

    useEffect(() => {
        function handleClickOutside(event) {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                dispatch(setFilterOpen(false))
            }
            if (sugerenciasRef.current && !sugerenciasRef.current.contains(event.target)) {
                dispatch(setSugerencias(false))
            }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(()=>{
        propiedades.forEach((element) => {
            ubicacionesArray.push(element.zona)
        });
        const ubicacionesSinDuplicados = new Set(ubicacionesArray)
        setUbicaciones([...ubicacionesSinDuplicados])
    }, [propiedades])

    useEffect(()=>{
        vehiculos.forEach((element) => {
            vehiculosArray.push(element.zona)
        })
        const vehiculosSinDuplicados = new Set(vehiculosArray)
        setUbisVehiculos([...vehiculosSinDuplicados])
    }, [vehiculos])


    const changePais = (event) => {
        if(isVehiculo){
            dispatch(setFilterOpen(false))
            const filtroVehiculosZona = ubisVehiculos.filter((location) =>
                location.toLowerCase().includes(event.target.value.toLowerCase())
            )
            setVehiculosFiltrados(filtroVehiculosZona)
            setUbicacionVehiculo(event.target.value)
            setFiltroVehiculo({...filtroVehiculo, ubicacion: event.target.value})
            dispatch(setSugerencias(true))
        }else{
            dispatch(setFilterOpen(false))
            const filtroPropiedades = ubicaciones.filter((location) =>
                location.toLowerCase().includes(event.target.value.toLowerCase())
            )
            setUbicacionesFiltradas(filtroPropiedades)
            setUbicacionPropiedad(event.target.value)
            setFiltro({...filtro, ubicacion: event.target.value})
            dispatch(setSugerencias(true))
        }
    }

    const priceMin = (event) => {
        setFiltro({...filtro, min: Number(event.target.value)})
    }

    const priceMax = (event) => {
        setFiltro({...filtro, max: Number(event.target.value)})
    }

    const priceMinVehiculo = (event) => {
        setFiltroVehiculo({...filtroVehiculo, min: Number(event.target.value)})
    }

    const priceMaxVehiculo = (event) => {
        setFiltroVehiculo({...filtroVehiculo, max: Number(event.target.value)})
    }

    return(
        <div className={styles.container} onClick={() => setSugerencias(false)}>
            <div className={styles.containerFiltros}>
                <div className={styles.containerInputBusqueda}>
                    {isVehiculo ? 
                    <input onChange={changePais} value={ubicacionVehiculo} type="text" className={styles.inputBusqueda} placeholder={isTranslate ? "Search by country or city" : "Busca por pais o ciudad"} />
                    :
                    <input onChange={changePais} value={ubicacionPropiedad} type="text" className={styles.inputBusqueda} placeholder={isTranslate ? "Search by country or city" : "Busca por pais o ciudad"} />
                }
                </div>
                <> 
                    <div className={styles.separador}/>
                    <div className={styles.filterIcon} onClick={() => {
                        dispatch(setSugerencias(false))
                        dispatch(setFilterOpen(!filterOpen))
                    }}>
                        <Image
                        src={"/filter.png"}
                        width={20}
                        height={20}
                        alt="filtericon"
                        />
                        <small>{isTranslate ? "Filter by" : "Filtrar por"} </small>
                    </div>
                </>
            </div>
            {isVehiculo ? 
            <div className={styles.containerIconSearch}
            onClick={()=>{
                dispatch(setSugerencias(false))
                dispatch(setFilterOpen(!filterOpen))
                dispatch(setBusquedaVehiculos(filtroVehiculo))
            }}
            >
                <Image 
                src={"/search.png"}
                width={20}
                height={20}
                alt="searchicon"
                />
            </div>
            :
            <div className={styles.containerIconSearch}
            onClick={()=>{
                dispatch(setSugerencias(false))
                dispatch(setFilterOpen(false))
                dispatch(setBusqueda(filtro))
            }}
            >
                <Image 
                src={"/search.png"}
                width={20}
                height={20}
                alt="searchicon"
                />
            </div>
            }
            <div ref={sugerenciasRef} className={sugerenciasOpen ? styles.sugerencias : styles.sugerenciasOcult}>
                {isVehiculo ?  
                <div className={styles.listaSugerencias}>
                    {vehiculosFiltrados.map((u,i)=>(
                        <div key={i} className={styles.sugerenciaCard} onClick={() => {
                            setUbicacionVehiculo(u)
                            setFiltroVehiculo({...filtroVehiculo, ubicacion: u})
                            dispatch(setSugerencias(false))
                        }}>
                            <Image 
                            src={"/ubicacion.png"}
                            width={25}
                            height={35}
                            alt="ubicacionicono"
                            />
                            <strong>{u}</strong>
                        </div>
                    ))}
                </div>
                :
                <div className={styles.listaSugerencias}>
                    {ubicacionesFiltradas.map((u,i)=>(
                        <div key={i} className={styles.sugerenciaCard} onClick={() => {
                            setUbicacionPropiedad(u)
                            setFiltro({...filtro, ubicacion: u})
                            dispatch(setSugerencias(false))
                        }}>
                            <Image 
                            src={"/ubicacion.png"}
                            width={25}
                            height={35}
                            alt="ubicacionicono"
                            />
                            <div style={{display:"flex", width: "100%", justifyContent: "center"}}>
                                <strong>{u}</strong>
                            </div>
                        </div>
                    ))}
                </div>
                }
            </div>
            {isVehiculo ?  
            <div ref={filterRef} className={filterOpen ? styles.filterOpen : styles.filterClose}>
                <div className={styles.containerTitleInput}>
                    <h2>{isTranslate ? "Price range" : "Rango de precios"} </h2>
                    <div className={styles.inputsContainer}>
                        <div className={styles.inputStyle}>
                            <strong>Min</strong>
                            <input type="number" placeholder="10" onChange={priceMinVehiculo}/>
                        </div>
                        <div className={styles.inputStyle}>
                            <strong>Max</strong>
                            <input type="number" placeholder="300" onChange={priceMaxVehiculo}/>
                        </div>
                    </div>
                </div>
                <div className={styles.containerTitleInput}>
                    <h2>{isTranslate ? "Order from" : "Ordenar por"} </h2>
                    <div className={styles.buttonsContainer}>
                        <button className={mayorVehiculos ? styles.buttonActive :  styles.buttonInactive}
                        onClick={()=>{
                            if(menorVehiculos){
                                setMenorVehiculos(false)
                            }
                            setMayorVehiculos(!mayorVehiculos)
                            if(filtroVehiculo.orden == "mayor a menor"){
                                setFiltroVehiculo({...filtroVehiculo, orden: ""})
                            }else{
                                setFiltroVehiculo({...filtroVehiculo, orden: "mayor a menor"})
                            }
                        }}
                        >{isTranslate ? "Major to minor" : "Mayor a menor"} </button>
                        <button className={menorVehiculos ? styles.buttonActive :  styles.buttonInactive}
                        onClick={()=>{
                            if(mayorVehiculos){
                                setMayorVehiculos(false)
                            }
                            setMenorVehiculos(!menorVehiculos)
                            if(filtroVehiculo.orden == "menor a mayor"){
                                setFiltroVehiculo({...filtroVehiculo, orden: ""})
                            }else{
                                setFiltroVehiculo({...filtroVehiculo, orden: "menor a mayor"})
                            }
                        }}
                        >{isTranslate ? "Minor to major" : "Menor a mayor"} </button>
                    </div>
                </div>
            </div>
            :
            <div ref={filterRef} className={filterOpen ? styles.filterOpen : styles.filterClose}>
                <div className={styles.containerTitleInput}>
                    <h2>{isTranslate ? "Price range" : "Rango de precios"} </h2>
                    <div className={styles.inputsContainer}>
                        <div className={styles.inputStyle}>
                            <strong>Min</strong>
                            <input type="number" placeholder="10" onChange={priceMin}/>
                        </div>
                        <div className={styles.inputStyle}>
                            <strong>Max</strong>
                            <input type="number" placeholder="300" onChange={priceMax}/>
                        </div>
                    </div>
                </div>
                <div className={styles.containerTitleInput}>
                    <h2>{isTranslate ? "Order from" : "Ordenar por"} </h2>
                    <div className={styles.buttonsContainer}>
                        <button style={{marginLeft:10, marginRight: 10}} className={MayorAMenor ? styles.buttonActive :  styles.buttonInactive}
                        onClick={()=>{
                            if(MenorAMayor){
                                setMenorAMayor(false)
                            }
                            setMayorAMenor(!MayorAMenor)
                            if(filtro.orden == "mayor a menor"){
                                setFiltro({...filtro, orden: ""})
                            }else{
                                setFiltro({...filtro, orden: "mayor a menor"})
                            }
                        }}
                        >{isTranslate ? "Major to minor" : "Mayor a menor"} </button>
                        <button style={{marginLeft:10, marginRight: 10}} className={MenorAMayor ? styles.buttonActive :  styles.buttonInactive}
                        onClick={()=>{
                            if(MayorAMenor){
                                setMayorAMenor(false)
                            }
                            setMenorAMayor(!MenorAMayor)
                            if(filtro.orden == "menor a mayor"){
                                setFiltro({...filtro, orden: ""})
                            }else{
                                setFiltro({...filtro, orden: "menor a mayor"})
                            }
                        }}
                        >{isTranslate ? "Minor to major" : "Menor a mayor"} </button>
                    </div>
                </div>
                <div className={styles.containerTitleInput}>
                    <h2>{isTranslate ? "Number of guests" : "Numero de huespedes"} </h2>
                    <div className={styles.optionsContainer}>
                        {options.map((o, index)=>{
                            if(o == "8"){
                                return(
                                    <button onClick={() => {
                                        setSelected("8")
                                        if(selected == "8"){
                                            setSelected("")
                                            setFiltro({...filtro, huespedes: 0})
                                        }else{
                                            setSelected("8")
                                            setFiltro({...filtro, huespedes: 8})
                                        }
                                    }} className={selected == "8" ? styles.buttonActive : styles.buttonInactive}>+ {o} </button>
                                )
                            }else if(o == "any"){
                                return(
                                    <button onClick={() => {
                                        if(selected == "any"){
                                            setSelected("")
                                            setFiltro({...filtro, huespedes: 0})
                                        }else{
                                            setSelected("any")
                                            setFiltro({...filtro, huespedes: "any"})
                                        }
                                    }} className={selected == o ? styles.buttonActive : styles.buttonInactive}>{isTranslate ? "Any" : "Todo"} </button>
                                )
                            }else{
                                return(
                                    <button onClick={() => {
                                        if(selected == o){
                                            setSelected("")
                                            setFiltro({...filtro, huespedes: 0})
                                        }else{
                                            setSelected(o)
                                            setFiltro({...filtro, huespedes: Number(o)})
                                        }
                                    }} className={selected == o ? styles.buttonActive : styles.buttonInactive}>{o} </button>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className={styles.containerTitleInput} style={{marginBottom: 5}}>
                    <h2>{isTranslate ? "Rental type" : "Tipo de alquiler"} </h2>
                    <div className={styles.buttonsContainer}>
                        <button style={{marginLeft:10, marginRight: 10}} className={noche ? styles.buttonActive : styles.buttonInactive}
                        onClick={()=>{
                            if(mes){
                                setMes(false)
                            }
                            setNoche(!noche)
                            if(filtro.renta == "noche"){
                                setFiltro({...filtro, renta: ""})
                            }else{
                                setFiltro({...filtro, renta: "noche"})
                            }
                        }}
                        >{isTranslate ? "Price per night " : "Precio por noche"} </button>
                        <button style={{marginLeft:10, marginRight: 10}} className={mes ? styles.buttonActive : styles.buttonInactive}
                        onClick={()=>{
                            if(noche){
                                setNoche(false)
                            }
                            setMes(!mes)
                            if(filtro.renta == "mes"){
                                setFiltro({...filtro, renta: ""})
                            }else{
                                setFiltro({...filtro, renta: "mes"})
                            }
                        }}
                        >{isTranslate ? "Price per month" : "Precio por mes"} </button>
                    </div>
                </div>
            </div>
            }
            
        </div>
    )
}

export default FiltrosNav;