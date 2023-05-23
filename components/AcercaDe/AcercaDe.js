import styles from "./AcercaDe.module.css"
import { useSelector } from 'react-redux'

const AcercaDe = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <div className={styles.acercaDeContainer}>
            <h3>{isTranslate ? "Working with MAETTI is having efficiency and trust in us. Let’s do this together": "Trabajar con MAETTI es tener eficiencia y confianza en nosotros. Hagamos esto juntos."} </h3>
        </div>
    )
}

export default AcercaDe;