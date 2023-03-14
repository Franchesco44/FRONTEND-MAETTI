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
            {isTranslate ? "At" : "En"} <strong>MAETTI</strong> {isTranslate ? " we manage rental properties and tourist experiences through various online platforms. Our mission is to ensure that your properties and tourist experiences receive new clients throughout the year at the best prices in the market " : "gestionamos propiedades en alquiler y experiencias turísticas mediante diversas plataformas online. Nuestra misión es conseguir que tus viviendas y experiencias turísticas reciban nuevos clientes durante todo el año a los mejores precios del mercado"} <strong> {isTranslate ? "(in dollars)." : "(en dólares)."} </strong>
            </p>
        </div>
    )
}

export default QuienesSomos