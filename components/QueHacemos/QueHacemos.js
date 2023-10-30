import styles from "./QueHacemos.module.css"
import { useSelector } from 'react-redux'

const QueHacemos = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <div className={styles.containerQueHacemos}>
            <h3>{isTranslate?"What we do":"Qué hacemos"}</h3>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <strong>{isTranslate ? "Simple management" : ""} </strong>
                    <div className={styles.cardPartOne}>
                        <strong> {isTranslate ? "SIMPLE PLAN" : "PLAN SIMPLE"}</strong>
                        <strong> {isTranslate ? "12% OF COMMISSION" : "12% DE COMISION"}</strong>
                        
                    </div>
                    <div className={styles.cardPartTwo}>
                        <ul>
                            <li>{isTranslate ? "Increase housing exposure" : "Aumentar la exposición a la vivienda"}</li>
                            <li>{isTranslate ? "Customer service" : "Atención al cliente"}</li>
                            <li>{isTranslate ? "Recommended price analysis depending on supply and demand" : "Análisis de precios recomendados en función de la oferta y la demanda"}</li>
                            <li>{isTranslate ? "Analysis of guest profiles" : "Análisis de los perfiles de los huéspedes"}</li>
                            <li>{isTranslate ? "Calendar updating" : "Actualización del calendario"}</li>
                            <li>{isTranslate ? "Confirmation of Reservations" : "Confirmación de reservas"}</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <strong>{isTranslate ? "Full management" : ""} </strong>
                    <div className={styles.cardPartOne}>
                    <strong> {isTranslate ? "FULL MANAGMENT" : "GESTION COMPLETA"}</strong>
                        <strong> {isTranslate ? "25% OF COMMISSION" : "25% DE COMISIÓN"}</strong>
                        <strong> {isTranslate ? "(9 months of exclusivity)" : "(9 meses de exclusividad)"}</strong>
                    </div>
                    <div className={styles.cardPartTwo}>
                        <ul>
                        <li>{isTranslate ? "Increase housing exposure" : "Aumentar la exposición a la vivienda"}</li>
                            <li>{isTranslate ? "Customer service" : "Atención al cliente"}</li>
                            <li>{isTranslate ? "Recommended price analysis depending on supply and demand" : "Análisis de precios recomendados en función de la oferta y la demanda"}</li>
                            <li>{isTranslate ? "Analysis of guest profiles" : "Análisis de los perfiles de los huéspedes"}</li>
                            <li>{isTranslate ? "Calendar updating" : "Actualización del calendario"}</li>
                            <li>{isTranslate ? "Confirmation of Reservations" : "Confirmación de reservas"}</li>
                            <li>{isTranslate ? "Check in y check out" : "Check in y check out"}</li>
                            <li>{isTranslate ? "Housekeeping" : "Limpieza"}</li>
                            <li>{isTranslate ? "Only available for Bariloche, Mendoza and Capital Federal at the moment" : "Sólo disponible para Bariloche, Mendoza y Capital Federal por el momento"}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QueHacemos
