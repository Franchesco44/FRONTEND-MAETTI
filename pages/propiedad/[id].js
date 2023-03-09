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
            <div className={styles.propiedad} onClick={()=>console.log(descripcion)}>
                <Carousel>
                    {propiedad?.imagen?.map((i,index)=>{
                        return(
                            <Carousel.Item key={index}>
                                <div
                                style={{height: "450px", backgroundImage: `url(https://api-maetti.up.railway.app/${i})`
                                , backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", borderRadius: "10px"
                            }}
                                className="d-block w-100"
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <div className={styles.descripcionPrecioContainer}>
                    <div className={styles.descripcionContainer}>
                        <h2> {propiedad.titulo} </h2>
                        <ul className={styles.descripcion}>
                            {descripcion.map((item, index)=>{
                                return(
                                    <li key={index}> {item} </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={styles.precio}>
                        <h3> {propiedad.precio}USD | {propiedad.alquiler?.toUpperCase()} </h3>
                        {propiedad.alquiler === "mensual" ? 
                        <div className={styles.wp}>
                            <Image
                            src={'/wpblanco.png'}
                            width={30}
                            height={30}
                            />
                            <a target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`}>CONSULTAR POR WHATSAPP</a>
                        </div>
                        : 
                        <div className={styles.botones}>
                            <div className={styles.airbnb}>
                                <Image
                                src={'/airbnb.png'}
                                width={30}
                                height={30}
                                />
                                <a target={"_blank"} href={propiedad.url}>VER EN AIRBNB</a>
                            </div>
                            <div className={styles.wp}>
                                <Image
                                src={'/wpblanco.png'}
                                width={30}
                                height={30}
                                />
                                <a target={"_blank"} href={`https://wa.me/5492944238597?text=Hola!%20Como%20estas?%20Estoy%20interesado%20en%20la%20propiedad%20${tituloWp}`} >CONSULTAR POR WHATSAPP</a>
                            </div>
                        </div>
                        }
                        <strong className={styles.zona}> {propiedad.zona} </strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default propiedad