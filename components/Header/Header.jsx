import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.css"
import { useSelector, useDispatch } from 'react-redux'

const Header = ({text, img, button, linkButton}) => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <div className={styles.headerContainer}>
            <div className={styles.containerUno}>
                <h2>{text}</h2>
                <Image
                src={img}
                width={150}
                height={25}
                alt="Logo letras maettti"
                />
                {button ? <Link href={linkButton}> {isTranslate ? "+ INFORMATION" : "+ INFORMACIÓN"} </Link> : ""}
            </div>
            <div className={styles.containerDos}>
            </div>
        </div>
    )
}   

export default Header