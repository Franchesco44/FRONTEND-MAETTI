import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DiasTarjeta from "../../components/DiasTarjeta/DiasTarjeta";
import { experiencias } from "../../utils/experiencias";
import styles from "./experiencia.module.css"
import FormularioContacto from "../../components/FormularioContacto/FormularioContacto"
import { useSelector } from 'react-redux'

const experiencia = () => {
    const router = useRouter()
    const isTranslate = useSelector((state) => state.translate.value)
    const {name} = router.query;
    const [isLoading, setIsLoading] = useState(true)
    const [experiencia, setExperiencia] = useState({})
    const experienciaFiltrada = experiencias.filter((x) => x.es.titulo == name);

    useEffect(()=>{
        setExperiencia(experienciaFiltrada[0])
        setIsLoading(false)
        console.log(experiencia)
    }, [experienciaFiltrada])

    return(
        <>
            <Head>
                <title>{name}</title>
            </Head>
            {isLoading ? "" :
            <div>
                {isTranslate ? 
                                <>
                                <div
                                className={styles.header}
                                style={{backgroundImage: `url(${experiencia?.es.headerImg})`}}
                                >
                                    <h2> {experiencia?.en.titulo} </h2>
                                    <h3> {experiencia?.en.subtitulo} </h3>
                                </div>
                                <div className={styles.ubicacionContainer} >
                                    <div className={styles.ubicacion}>
                                        <Image
                                        src={"/posicion.png"}
                                        width={40}
                                        height={40}
                                        />
                                        <h3> {experiencia?.en.ubicacion} </h3>
                                    </div>
                                    <div className={styles.fecha}>
                                        <Image
                                        src={"/calendario.png"}
                                        width={40}
                                        height={40}
                                        />
                                        <div style={{display: "flex", alignItems: "center"}}>
                                            <div style={{backgroundColor: "#0A2239", padding: "2px", width: "30vw", borderRadius: "10px"}}></div>
                                            <h3>DATE</h3>
                                            <div style={{backgroundColor: "#0A2239", padding: "2px", width: "30vw", borderRadius: "10px"}}></div>
                                        </div>
                                        <h4> {experiencia?.en.fecha} </h4>
                                    </div>
                                </div>
                                <div className={styles.descripcion}>
                                    <h2> {experiencia?.en.ubicacion} </h2>
                                    <p> {experiencia?.en.descripcion} </p>
                                    <strong> {experiencia?.en.descripcionFinal} </strong>
                                </div>
                                <div
                                className={styles.header}
                                style={{backgroundImage: `url(${experiencia?.es.imgUno})`}}
                                >
                                </div>
                                <div className={styles.viajeContainer}>
                                        <Image
                                        src={"/posicion.png"}
                                        width={40}
                                        height={40}
                                        />
                                        <div className={styles.viaje}>
                                            <h3> TRIP START: </h3>
                                            <h4> {experiencia?.en.inicioViaje} </h4>
                                        </div>
                                        <div className={styles.viaje}>
                                            <h3> END OF TRIP: </h3>
                                            <h4> {experiencia?.en.finalViaje} </h4>
                                        </div>
                                </div>
                                <div className={styles.itinerarioContainer}>
                                    <div className={styles.itinerarioTitulo} >
                                        <Image
                                        src={"/libro.png"}
                                        width={70}
                                        height={70}
                                        />
                                        <div style={{display: "flex", alignItems: "center"}}>
                                            <div style={{backgroundColor: "#0A2239", padding: "2px", width: "30vw", borderRadius: "10px"}}></div>
                                            <h3>ITINERARY</h3>
                                            <div style={{backgroundColor: "#0A2239", padding: "2px", width: "30vw", borderRadius: "10px"}}></div>
                                        </div>
                                    </div>
                                    <div className={styles.listaDias}>
                                        {experiencia?.en.dias.map((d, index)=>{
                                            return(
                                                <DiasTarjeta key={index} data={d}/>
                                            )
                                        })}
                                    </div>  
                                </div>
                            </>
                :
                <>
                    <div
                    className={styles.header}
                    style={{backgroundImage: `url(${experiencia?.es.headerImg})`}}
                    >
                        <h2> {experiencia?.es.titulo} </h2>
                        <h3> {experiencia?.es.subtitulo} </h3>
                    </div>
                    <div className={styles.ubicacionContainer} >
                        <div className={styles.ubicacion}>
                            <Image
                            src={"/posicion.png"}
                            width={40}
                            height={40}
                            />
                            <h3> {experiencia?.es.ubicacion} </h3>
                        </div>
                        <div className={styles.fecha}>
                            <Image
                            src={"/calendario.png"}
                            width={40}
                            height={40}
                            />
                            <div style={{display: "flex", alignItems: "center"}}>
                                <div style={{backgroundColor: "#0A2239", padding: "2px", width: "30vw", borderRadius: "10px"}}></div>
                                <h3>FECHA</h3>
                                <div style={{backgroundColor: "#0A2239", padding: "2px", width: "30vw", borderRadius: "10px"}}></div>
                            </div>
                            <h4> {experiencia?.es.fecha} </h4>
                        </div>
                    </div>
                    <div className={styles.descripcion}>
                        <h2> {experiencia?.es.ubicacion} </h2>
                        <p> {experiencia?.es.descripcion} </p>
                        <strong> {experiencia?.es.descripcionFinal} </strong>
                    </div>
                    <div
                    className={styles.header}
                    style={{backgroundImage: `url(${experiencia?.es.imgUno})`}}
                    >
                    </div>
                    <div className={styles.viajeContainer}>
                            <Image
                            src={"/posicion.png"}
                            width={40}
                            height={40}
                            />
                            <div className={styles.viaje}>
                                <h3> INICIO DEL VIAJE: </h3>
                                <h4> {experiencia?.es.inicioViaje} </h4>
                            </div>
                            <div className={styles.viaje}>
                                <h3> FIN DEL VIAJE: </h3>
                                <h4> {experiencia?.es.finalViaje} </h4>
                            </div>
                    </div>
                    <div className={styles.itinerarioContainer}>
                        <div className={styles.itinerarioTitulo} >
                            <Image
                            src={"/libro.png"}
                            width={70}
                            height={70}
                            />
                            <div style={{display: "flex", alignItems: "center"}}>
                                <div style={{backgroundColor: "#0A2239", padding: "2px", width: "30vw", borderRadius: "10px"}}></div>
                                <h3>ITINERARIO</h3>
                                <div style={{backgroundColor: "#0A2239", padding: "2px", width: "30vw", borderRadius: "10px"}}></div>
                            </div>
                        </div>
                        <div className={styles.listaDias}>
                            {experiencia?.es.dias.map((d, index)=>{
                                return(
                                    <DiasTarjeta key={index} data={d}/>
                                )
                            })}
                        </div>  
                    </div>
                </>
                }
                
                <FormularioContacto/>
            </div>
            }
        </>
    )
}

export default experiencia;