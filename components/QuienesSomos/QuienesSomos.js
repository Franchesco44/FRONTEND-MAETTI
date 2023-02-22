import styles from "./QuienesSomos.module.css"
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

const QuienesSomos = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <div className={styles.containerQuienesSomos}>
            <Image
            src={"/techologo.png"}
            width={100}
            height={50}
            alt="techo logo"
            />
            <h2>{isTranslate ? "Who we are" : "Quiénes somos"} </h2>
            <p>
            {isTranslate ? "At" : "En"} <strong>MAETTI</strong> {isTranslate ? "we manage properties for rent through various tourist accommodation platforms. Our mission is to ensure that your properties receive new guests throughout the year at the best prices on the market." : "gestionamos propiedades en alquiler mediante diversas plataformas de alojamientos turísticos. Nuestra misión es conseguir que tus viviendas reciban nuevos huéspedes durante todo el año a los mejores precios del mercado"}<strong>{isTranslate ? "(in dollars)": "(en dólares)"}</strong>, {isTranslate ? "with an average booking time of less than 48 hours after listing the property" : "con un promedio de reservación en menos de 48 horas luego de publicar la propiedad."}
            </p>
        </div>
    )
}

export default QuienesSomos