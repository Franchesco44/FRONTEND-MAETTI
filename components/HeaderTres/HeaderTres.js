import styles from "./HeaderTres.module.css"
import { useSelector } from "react-redux";
import Image from "next/image";

const HeaderTres = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <div className={styles.headerContainer}>
            <Image
            src={"/letrasmaetti.png"}
            width={300}
            height={50}
            alt="logomaetti"
            />
            <div className={styles.buttonsContainer}>
                <a href="#huespedes">{isTranslate ? "Guests Benefits" : "Beneficios para los huéspedes"} </a>
                <a href="#propietarios">{isTranslate ? "Owner Benefits" : "Beneficios para el propietario"}</a>
            </div>
        </div>
    )
}

export default HeaderTres;