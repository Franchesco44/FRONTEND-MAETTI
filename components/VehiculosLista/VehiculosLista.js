import styles from "./VehiculosLista.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Link from "next/link"
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios"
import { setVehiculos } from "../../redux/vehiculosSlice/vehiculosSlice"

const VehiculosLista = () => {
    const dispatch = useDispatch()
    const vehiculos = useSelector((state)=> state.vehiculos.dataCopy)
    const isTranslate = useSelector((state) => state.translate.value)

    const getVehiculos = async () => {
        try {
            const vehiculos = await axios.get('https://api-maetti.up.railway.app/vehiculosSubidos')
            const data = await vehiculos.data
            dispatch(setVehiculos(data))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getVehiculos()
    }, [])

    return(
        <div className={styles.containerVehiculos}>
            <div className={styles.listaVehiculos} >
                {vehiculos.map((p, index)=>{
                    return(
                        <Link href={`/vehiculo/${p._id}`} style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div className={styles.vehiculos} key={index}>
                                <Carousel interval={null}>
                                    {p.imagen.map((i,index)=>{
                                        return(
                                            <Carousel.Item key={index}>
                                                <div
                                                style={{backgroundImage: `url(https://api-maetti.up.railway.app/${i})`
                                                , backgroundPosition: "center", backgroundRepeat: "no-repeat"
                                            }}
                                                className={styles.carruselItem}
                                                />
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                                <div className={styles.infoContainer}>
                                    <h4> {p.titulo} </h4>
                                    <strong> ${p.precio} USD | {isTranslate ? "Day" : "Dia"} </strong>
                                </div>
                            </div>  
                        </Link>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default VehiculosLista