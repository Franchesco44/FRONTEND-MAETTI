import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.css"
import { useSelector } from 'react-redux'

const Header = ({text, img, button, linkButton}) => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <div className={styles.headerContainer} style={{backgroundColor: "#0A2239"}}>
            <div 
            className={styles.containerUno}>
                <h2>{text}</h2>
                <Image
                src={"/letrasmaetti.png"}
                width={150}
                height={25}
                alt="Logo letras maettti"
                />
                {button ? <Link href={linkButton}> {isTranslate ? "+ INFORMATION" : "+ INFORMACIÓN"} </Link> : ""}
            </div>
            <div 
            style={{backgroundImage: `url(${img})`}}
            className={styles.containerMobile}>
                <h2>{text}</h2>
                <Image
                src={"/letrasmaetti.png"}
                width={150}
                height={25}
                alt="Logo letras maettti"
                />
                {button ? <Link href={linkButton}> {isTranslate ? "+ INFORMATION" : "+ INFORMACIÓN"} </Link> : ""}
                <div className={styles.fondoAzul}></div>
            </div>
            <div 
            style={{backgroundImage: `url(${img})`}}
            className={styles.containerDos}>
            </div>
        </div>
    )
}   

export default Header