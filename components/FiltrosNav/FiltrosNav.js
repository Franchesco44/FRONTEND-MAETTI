import Image from "next/image";
import styles from "./FiltrosNav.module.css"
import { useSelector, useDispatch } from "react-redux";
import {useEffect, useState} from "react"
import { setFilterAll, setLocalizacion, setMayorAMenor, setMenorAMayor, setMensual, setPrice, setNoche } from "../../redux/propiedadesSlice/propiedadesSlice";
import { setLocalizacionVehiculos } from "../../redux/vehiculosSlice/vehiculosSlice";

const FiltrosNav = () =>{
    const isTranslate = useSelector((state) => state.translate.value)
    const isVehiculo = useSelector((state) => state.vehiculos.isVehiculos)
    const vehiculos = useSelector((state) => state.vehiculos.data)
    const propiedades = useSelector((state)=> state.propiedades.data)
    const dispatch = useDispatch()
    const [iconDeleteFilter, setIconDeleteFilter] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [precio, setPrecio] = useState({
        min: 0,
        max: 0
    })
    const [options, setOptions] = useState(["any", 1, 2, 3, 4, 5, 6, 7, "8"])
    const [selected, setSelected] = useState("")
    const [sugerencias, setSugerencias] = useState(false)
    const [ubicacion, setUbicacion] = useState("")

    const [ubicaciones, setUbicaciones] = useState([])
    const [ubicacionesFiltradas, setUbicacionesFiltradas] = useState(ubicaciones)
    const ubicacionesArray = []


    const [ubicacionVehiculo, setUbicacionVehiculo] = useState("")
    const [ubisVehiculos, setUbisVehiculos] = useState([])
    const [vehiculosFiltrados, setVehiculosFiltrados] = useState(ubisVehiculos)
    const vehiculosArray = [] 

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
            setIsOpen(false)
            const filtro = ubisVehiculos.filter((location) =>
                location.toLowerCase().includes(event.target.value.toLowerCase())
            )
            setVehiculosFiltrados(filtro)
            setUbicacionVehiculo(event.target.value)
            setSugerencias(true)
        }else{
            setIsOpen(false)
            const filtro = ubicaciones.filter((location) =>
                location.toLowerCase().includes(event.target.value.toLowerCase())
            )
            setUbicacionesFiltradas(filtro)
            setUbicacion(event.target.value)
            setSugerencias(true)
        }
    }

    const priceMin = (event) => {
        setPrecio({
            ...precio, min: event.target.value
        })
    }

    const priceMax = (event) => {
        setPrecio({
            ...precio, max: event.target.value
        })
    }

    return(
        <div className={styles.container} onClick={() => setSugerencias(false)}>
            <div className={styles.containerFiltros}>
                
                <div className={styles.containerInputBusqueda}>
                    {isVehiculo ? 
                    <input onChange={changePais} value={ubicacionVehiculo} type="text" className={styles.inputBusqueda} placeholder={isTranslate ? "Search by country or city" : "Busca por pais o ciudad"} />
                    :
                    <input onChange={changePais} value={ubicacion} type="text" className={styles.inputBusqueda} placeholder={isTranslate ? "Search by country or city" : "Busca por pais o ciudad"} />
                }
                </div>
                    {isVehiculo ? "" :
                    <> 
                        <div className={styles.separador}/>
                        <div className={styles.filterIcon} onClick={() => {
                            setSugerencias(false)
                            setIsOpen(!isOpen)
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
                    }
            </div>
            {iconDeleteFilter ? 
            <div className={styles.containerDeleteFilter}
            onClick={() => {
                dispatch(setFilterAll())
                setUbicacion("")

                setIconDeleteFilter(false)
            }}
            >
                <Image
                src={"/circle.png"}
                width={30}
                height={30}
                alt="closeicon"
                />
            </div>
            : ""}
            {isVehiculo ? "" :
            <div className={styles.containerIconSearch}
            onClick={()=>{
                setIsOpen(false)
                setIconDeleteFilter(true)
                dispatch(setPrice(precio))
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
            <div className={sugerencias ? styles.sugerencias : styles.sugerenciasOcult}>
                <div className={styles.closeContainer} onClick={() => setSugerencias(false)}>
                    <Image
                    src={"/circle.png"}
                    width={30}
                    height={30}
                    alt="closeicon"
                    onClick={() => setIsOpen(false)}
                    />
                </div>
                {isVehiculo ?  
                <div className={styles.listaSugerencias}>
                    {vehiculosFiltrados.map((u,i)=>(
                        <div key={i} className={styles.sugerenciaCard} onClick={() => {
                            setUbicacionVehiculo(u)
                            dispatch(setLocalizacionVehiculos(u))
                            setIconDeleteFilter(true)
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
                            setUbicacion(u)
                            dispatch(setLocalizacion(u))
                            setIconDeleteFilter(true)
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
                }
            </div>
            <div className={isOpen ? styles.filterOpen : styles.filterClose}>
                <div className={styles.closeContainer}>
                    <Image
                    src={"/circle.png"}
                    width={30}
                    height={30}
                    alt="closeicon"
                    onClick={() => setIsOpen(false)}
                    />
                </div>
                <div className={styles.containerTitleInput}>
                    <h2>{isTranslate ? "Price range" : "Rango de precios"} </h2>
                    <div className={styles.inputsContainer}>
                        <div className={styles.inputStyle}>
                            <small>Min</small>
                            <input type="number" placeholder="10" onChange={priceMin}/>
                        </div>
                        <div className={styles.inputStyle}>
                            <small>Max</small>
                            <input type="number" placeholder="300" onChange={priceMax}/>
                        </div>
                    </div>
                </div>
                <div className={styles.containerTitleInput}>
                    <h2>{isTranslate ? "Order from" : "Ordenar por"} </h2>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.buttonInactive}
                        onClick={()=>{
                            dispatch(setMayorAMenor())
                            setIconDeleteFilter(true)
                        }}
                        >{isTranslate ? "Major to minor" : "Mayor a menor"} </button>
                        <button className={styles.buttonInactive}
                        onClick={()=>{
                            dispatch(setMenorAMayor())
                            setIconDeleteFilter(true)
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
                                        setIconDeleteFilter(true)
                                    }} className={selected == "8" ? styles.buttonActive : styles.buttonInactive}>+ {o} </button>
                                )
                            }else{
                                return(
                                    <button onClick={() => {
                                        setSelected(o)
                                        setIconDeleteFilter(true)
                                    }} className={selected == o ? styles.buttonActive : styles.buttonInactive}>{o} </button>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className={styles.containerTitleInput}>
                    <h2>{isTranslate ? "Rental type" : "Tipo de alquiler"} </h2>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.buttonInactive}
                        onClick={()=>{
                            dispatch(setNoche())
                            setIconDeleteFilter(true)
                        }}
                        >{isTranslate ? "Price per night " : "Precio por noche"} </button>
                        <button className={styles.buttonInactive}
                        onClick={()=>{
                            dispatch(setMensual())
                            setIconDeleteFilter(true)
                        }}
                        >{isTranslate ? "Price per month" : "Precio por mes"} </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiltrosNav;