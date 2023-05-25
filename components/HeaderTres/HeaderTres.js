import styles from "./HeaderTres.module.css"
import { useSelector } from "react-redux";
import Image from "next/image";

const HeaderTres = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <div className={styles.headerContainer}>
            <div className={styles.containerFondoAzul}>
                <Image
                src={"/maettiagency.png"}
                width={650}
                height={150}
                alt="logomaetti"
                />
                <div className={styles.buttonsContainer}>
                    <a href="#huespedes">{isTranslate ? "Guests Benefits" : "Beneficios de huéspedes"} </a>
                    <a href="#propietarios">{isTranslate ? "Owner Benefits" : "Beneficios de propietario"}</a>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderTres;