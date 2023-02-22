import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.css"
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <div className={styles.headerContainer}>
            <div className={styles.containerUno}>
                <h2>{isTranslate ? "The optimization of your property's your property starts here." : 
                "La optimización del alquiler de tu propiedad empieza acá."}</h2>
                <Image
                src={"/letrasmaetti.png"}
                width={150}
                height={25}
                alt="Logo letras maettti"
                />
                <Link href={"/trabajaconnosotros"}> {isTranslate ? "+ INFORMATION" : "+ INFORMACIÓN"} </Link>
            </div>
            <div className={styles.containerDos}>
            </div>
        </div>
    )
}   

export default Header