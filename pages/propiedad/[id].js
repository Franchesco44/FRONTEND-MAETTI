import styles from "./propiedad.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel'
import Image from "next/image";
import { setStaticNav } from "../../redux/navSlice/navSlice";

const propiedad = () => {
    const router = useRouter()
    const isTranslate = useSelector((state) => state.translate.value)
    const dispatch = useDispatch()
    const {id} = router.query;
    const [propiedad, setPropiedad] = useState({})
    const [descripcion, setDescripcion] = useState([])
    const [tituloWp, setTituloWp] = useState("")

    const getPropiedad = async () => {
        const propiedad = await axios.get(`https://api-maetti.up.railway.app/propiedad/${id}`)
        setPropiedad(propiedad.data[0])
        const nuevaDescripcion = propiedad.data[0].descripcion.split('-')
        const nuevoTituloParaWp = propiedad.data[0].titulo.replaceAll(' ', '%20')
        setTituloWp(nuevoTituloParaWp)
        setDescripcion(nuevaDescripcion)
    } 

    useEffect(()=>{
        dispatch(setStaticNav(false))
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
                    <div className={styles.carruselContainer} >
                        <Carousel>
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
                    <div className={styles.precio}>
                        <h2> {propiedad.titulo} </h2>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div className={styles.separador}></div>
                        </div>
                        <h3> {propiedad.precio}USD | {propiedad.alquiler?.toUpperCase()} </h3>
                        {propiedad.alquiler === "mensual" ? 
                        <a target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`} className={styles.wp}>
                            <Image
                            src={'/wpblanco.png'}
                            width={30}
                            height={30}
                            />
                            <a className={styles.textoBoton} target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`} >CONSULTAR POR WHATSAPP</a>
                        </a>
                        : 
                        <div className={styles.botones}>
                            <a target={"_blank"} href={propiedad.url} className={styles.airbnb}>
                                <Image
                                src={'/airbnb.png'}
                                width={30}
                                height={30}
                                />
                                <a className={styles.textoBoton} target={"_blank"} href={propiedad.url}>VER EN AIRBNB</a>
                            </a>
                            <a target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`} className={styles.wp}>
                                <Image
                                src={'/wpblanco.png'}
                                width={30}
                                height={30}
                                />
                                <a className={styles.textoBoton} target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`} >CONSULTAR POR WHATSAPP</a>
                            </a>
                        </div>
                        }
                        <strong className={styles.zona}> {propiedad.zona} </strong>
                    </div>
                </div>
                <div className={styles.descripcionPrecioContainer}>
                    <div className={styles.descripcionContainer}>
                        <ul className={styles.descripcion}>
                            {descripcion.map((item, index)=>{
                                return(
                                    <li key={index}> {item} </li>
                                )
                            })}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default propiedad