import styles from "./QuienesSomos.module.css"
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

const QuienesSomos = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <div className={styles.containerQuienesSomos} id="quehacemos">
            <Image
            src={"/techologo.png"}
            width={100}
            height={50}
            alt="techo logo"
            />
            <h2>{isTranslate ? "Who we are" : "Quiénes somos"} </h2>
            <p>
            {isTranslate ? "At" : "En"} <strong>MAETTI AGENCY</strong> {isTranslate ? " we manage rental properties and other type of rentals (like cars, yatchs, etc) through various online platforms. Our mission is to ensure that your properties receive new clients throughout the year at the best prices in the market and have a the best experience posible for the owner of the property as well as for the guests. " : "gestionamos propiedades en alquiler y otro tipo de alquileres (como coches, yates, etc) a través de varias plataformas online. Nuestra misión es asegurar que sus propiedades reciban nuevos clientes durante todo el año a los mejores precios del mercado y tengan la mejor experiencia posible tanto para el propietario de la propiedad como para los huéspedes."}
            </p>
        </div>
    )
}

export default QuienesSomos