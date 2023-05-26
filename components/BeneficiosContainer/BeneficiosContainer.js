import styles from "./BeneficiosContainer.module.css"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios"
import { setBeneficios } from "../../redux/beneficiosSlice/beneficiosSlice";
import Image from "next/image";

const BeneficiosContainer = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const beneficios = useSelector((state) => state.beneficios.dataCopy)
    const dispatch = useDispatch()

    const getBeneficios = async () => {
        try {
            const beneficios = await axios.get('https://api-maetti.up.railway.app/beneficiosSubidos')
            const data = await beneficios.data
            dispatch(setBeneficios(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getBeneficios()
    }, [])

    return(
        <div className={styles.beneficiosContainer}>
            <div className={styles.tituloContainer} id="huespedes">
                <h2>{isTranslate ? "Benefits For Guests" : "Beneficios para los huespedes"} </h2>
                <div className={styles.beneficiosLista}>
                    {beneficios.map((b, index) => {
                        if(b.tipobeneficio === "propietarios"){
                            return(
                                <div className={styles.error}>
                                    <strong>{isTranslate ? "No guest benefits available yet" : "No hay beneficios para huespedes disponibles aun"} </strong>
                                </div>
                            )
                        }else{
                                <div className={styles.cardBeneficios}>
                                    <div className={styles.logoContainer} style={{backgroundImage: `url(https://api-maetti.up.railway.app/${b.imagen})`}}/>
                                    <div className={styles.containerInfo}>
                                        <h4 className={styles.descripcionBeneficio}>{isTranslate ? b.descripcionIngles : b.descripcion} </h4>
                                        <div className={styles.containerSocial}>
                                            <div className={styles.cardSocial}>
                                                <Image
                                                src={"/phoneblue.png"}
                                                width={50}
                                                height={50}
                                                alt="iconotelefono"
                                                />
                                                <strong>{b.telefono}</strong>
                                            </div>
                                            <div className={styles.cardSocial}>
                                                <Image
                                                src={"/mailblue.png"}
                                                width={50}
                                                height={50}
                                                alt="iconotelefono"
                                                />
                                                <strong>{b.mail}</strong>
                                            </div>
                                            <a className={styles.cardSocial} target={"_blank"} href={b.instagram}>
                                                <Image
                                                src={"/instagramblue.png"}
                                                width={50}
                                                height={50}
                                                alt="iconotelefono"
                                                />
                                                <strong>{b.titulo}</strong>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        }
                    })}
                </div>
                <h2>{isTranslate ? "Benefits For Owners" : "Beneficios para los propietarios"} </h2>
                <p> {isTranslate ? "The owners have the guest benefits as well" : "Los propietarios también tienen los beneficios para los huéspedes"} </p>
                <div className={styles.beneficiosLista} id="propietarios">
                    {beneficios.map((b, index) => {
                        if(b.tipobeneficio === "propietarios"){
                            return(
                                <div className={styles.cardBeneficios}>
                                    <div className={styles.logoContainer} style={{backgroundImage: `url(https://api-maetti.up.railway.app/${b.imagen})`}}/>
                                    <div className={styles.containerInfo}>
                                        <h4 className={styles.descripcionBeneficio}>{isTranslate ? b.descripcionIngles : b.descripcion} </h4>
                                        <div className={styles.containerSocial}>
                                            <div className={styles.cardSocial}>
                                                <Image
                                                src={"/phoneblue.png"}
                                                width={50}
                                                height={50}
                                                alt="iconotelefono"
                                                />
                                                <strong>{b.telefono}</strong>
                                            </div>
                                            <div className={styles.cardSocial}>
                                                <Image
                                                src={"/mailblue.png"}
                                                width={50}
                                                height={50}
                                                alt="iconotelefono"
                                                />
                                                <strong>{b.mail}</strong>
                                            </div>
                                            <a className={styles.cardSocial} target={"_blank"} href={b.instagram}>
                                                <Image
                                                src={"/instagramblue.png"}
                                                width={50}
                                                height={50}
                                                alt="iconotelefono"
                                                />
                                                <strong>{b.titulo}</strong>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }else{
                            <div className={styles.error}>
                                <strong>{isTranslate ? "No owners benefits available yet" : "No hay beneficios para propietarios disponibles aun"} </strong>
                            </div>
                        }
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default BeneficiosContainer