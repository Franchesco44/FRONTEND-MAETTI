import styles from "./Footer.module.css"
import { useSelector } from 'react-redux'
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <footer className={styles.footer}>
            <div className={styles.menu}>
                <strong>MENU</strong>
                <ul>
                    <Link href={"/"}>{isTranslate ? "Home" : "Inicio"}</Link>
                    <Link href={"/trabajaconnosotros"}>{isTranslate ? "Work with us" : "Trabaja con nosotros"}</Link>
                    <Link href={"/contacto"}>{isTranslate ? "Contact" : "Contacto"}</Link>
                    <Link href={"/propiedades"}>{isTranslate ? "Properties" : "Propiedades"}</Link>
                </ul>
            </div>
            <div className={styles.contacto}>
                <strong>{isTranslate ? "CONTACT":"CONTACTO"}</strong>
                <ul>
                    <div className={styles.item}>
                        <Image
                        src={"/phone.png"}
                        width={30}
                        height={30}
                        alt="Logo telefono"
                        />
                        <li>+5492944238597</li>
                    </div>
                    <div className={styles.item}>
                        <Image
                        src={"/phone.png"}
                        width={30}
                        height={30}
                        alt="Logo telefono"
                        />
                        <li>+541122920919</li>
                    </div>
                    <a target={"_blank"} href="https://www.instagram.com/maettioficial/">
                        <Image
                        src={"/instagram.png"}
                        width={30}
                        height={30}
                        alt="Logo instagram"
                        />
                    </a>
                </ul>
            </div>
            <div className={styles.logo}>
                <Link href={"/"}>
                    <Image
                    src={"/logoletras.png"}
                    width={120}
                    height={60}
                    alt="LogoMaetti"
                    />
                </Link>
            </div>
        </footer>
    )
}

export default Footer;