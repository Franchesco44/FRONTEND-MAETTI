import styles from "./propiedad.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel'
import Image from "next/image";
import { setStaticNav } from "../../redux/navSlice/navSlice";
import { setIsInicio } from "../../redux/propiedadesSlice/propiedadesSlice";

const propiedad = () => {
    const router = useRouter()
    const isTranslate = useSelector((state) => state.translate.value)
    const dispatch = useDispatch()
    const {id} = router.query;
    const [propiedad, setPropiedad] = useState({})
    const [descripcion, setDescripcion] = useState([])
    const [descripcionIngles, setDescripcionIngles] = useState([])
    const [tituloWp, setTituloWp] = useState("")

    const getPropiedad = async () => {
        const propiedad = await axios.get(`https://api-maetti.up.railway.app/propiedad/${id}`)
        setPropiedad(propiedad.data[0])
        const nuevaDescripcion = propiedad.data[0].descripcion.split('-')
        const nuevoTituloParaWp = propiedad.data[0].titulo.replaceAll(' ', '%20')
        const nuevaDescripcionIngles = propiedad.data[0].descripcionIngles.split('-')
        setTituloWp(nuevoTituloParaWp)
        setDescripcion(nuevaDescripcion)
        setDescripcionIngles(nuevaDescripcionIngles)
    } 

    useEffect(()=>{
        dispatch(setStaticNav(false))
        dispatch(setIsInicio(false))
    }, [])

    useEffect(()=>{
        if(!id) {
            return;
        }
        getPropiedad()
    }, [id])

    return(
        <div className={styles.propiedadContenedor} >
            <div className={styles.propiedad}>
                <div className={styles.carruselPrecioContainer}>
                    <h2 className={styles.ocultDesktop}>{isTranslate ? propiedad.tituloIngles : propiedad.titulo}</h2>
                    <div className={styles.carruselContainer} >
                        <Carousel interval={null}>
                            {propiedad?.imagen?.map((i,index)=>{
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
                    </div>
                    <div className={styles.precioMobile}>
                        <div className={styles.containerPrecioBoton}>
                            <h3> ${propiedad.precio}USD | {propiedad.alquiler?.toUpperCase()} </h3>
                            <a target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`} className={styles.wp}>
                                <Image
                                src={'/wpblanco.png'}
                                width={30}
                                height={30}
                                />
                                <a className={styles.textoBoton} target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`} >CONSULTAR POR WHATSAPP</a>
                            </a>
                        </div>
                        <strong className={styles.zona}> {propiedad.zona} </strong>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px"}}>
                            <div className={styles.separador}></div>
                        </div>
                    </div>
                    <div className={styles.precio}>
                        <h2 className={styles.ocultMobile}>{isTranslate ? propiedad.tituloIngles : propiedad.titulo}</h2>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div className={styles.separador}></div>
                        </div>
                        <h3> ${propiedad.precio}USD | {propiedad.alquiler?.toUpperCase()} </h3>
                        <div className={styles.containerBoton}>
                            <a target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`} className={styles.wp}>
                                <Image
                                src={'/wpblanco.png'}
                                width={30}
                                height={30}
                                />
                                <a className={styles.textoBoton} target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`} >CONSULTAR POR WHATSAPP</a>
                            </a>
                        </div>
                        <strong className={styles.zona}> {propiedad.zona} </strong>
                    </div>
                </div>
                <div className={styles.descripcionPrecioContainer}>
                    <div className={styles.descripcionContainer}>
                        <ul className={styles.descripcion}>
                            {isTranslate ?
                            descripcionIngles.map((item, index)=>{
                                return(
                                    <li key={index}> {item} </li>
                                )
                            })
                            :
                            descripcion.map((item, index)=>{
                                return(
                                    <li key={index}> {item} </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default propiedad