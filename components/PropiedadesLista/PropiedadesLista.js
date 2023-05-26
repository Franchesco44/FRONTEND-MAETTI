import styles from "./PropiedadesLista.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { setPropiedades } from "../../redux/propiedadesSlice/propiedadesSlice"
import Link from "next/link"
import Carousel from 'react-bootstrap/Carousel'

const PropiedadesLista = () => {

    const dispatch = useDispatch()
    const propiedades = useSelector((state)=> state.propiedades.dataCopy)
    const isTranslate = useSelector((state) => state.translate.value)

    const getPropiedades = async () => {
        try {
            const propiedades = await axios.get('https://api-maetti.up.railway.app/propiedadesSubidas')
            const data = await propiedades.data
            dispatch(setPropiedades(data))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getPropiedades()
    }, [])

    return(
        <div className={styles.PropiedadesListaContainer} >
            <div className={styles.listaPropiedades} >
                {propiedades.map((p, index)=>{
                    return(
                        <Link href={`/propiedad/${p._id}`} style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div className={styles.propiedad} key={index}>
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
                                    <h4> {isTranslate ? p.tituloIngles : p.titulo} </h4>
                                    <strong> ${p.precio} USD | {p.alquiler} </strong>
                                </div>
                            </div>  
                        </Link>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default PropiedadesLista