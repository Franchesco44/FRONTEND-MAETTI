import Image from "next/image"
import styles from "./HagamosEsto.module.css"
import { useSelector } from 'react-redux'

const HagamosEsto = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <div className={styles.hagamosEstoContainer}>
            <div
            className={styles.image}
            style={{backgroundImage: "url(/hagamosesto.png)"}}
            ></div>
            <div>
                <h3> {isTranslate ? "Let's do this together." : "Hagamos esto juntos."} </h3>
                <ul>
                    <strong>{isTranslate ? "CONTACT" : "CONTACTO"} </strong>
                    <li>1122920919</li>
                    <li>(+54) 2944 23-8597</li>
                    <li>maettiairbnb@gmail.com</li>
                </ul>
            </div>
        </div>
    )
}

export default HagamosEsto;