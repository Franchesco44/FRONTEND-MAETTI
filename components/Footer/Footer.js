import styles from "./Footer.module.css"
import { useSelector } from 'react-redux'
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <footer className={styles.footer}>
            <div className={styles.containerLogo}>
                <Link href={"/"}>
                    <Image 
                    src={"/logo.JPG"}
                    width={100}
                    height={100}
                    alt="logomaetti"
                    className={styles.icono}
                    />
                </Link>
            </div>
            <div className={styles.itemFooter}>
                <Image 
                src={"/instagramwhite.png"}
                width={70}
                height={70}
                alt="instagrammaetti"
                className={styles.icono}
                />
                <a target={"_blank"} href="https://www.instagram.com/maettiagency/">@Maettiagency</a>
            </div>
            <div className={styles.itemFooter}>
                <Image 
                src={"/mailwhite.png"}
                width={70}
                height={70}
                alt="mailmaetti"
                className={styles.icono}
                />
                <a target={"_blank"} href="mailto:maettiagency@gmail.com">Maettiagency@gmail.com</a>
            </div>
            <div className={styles.itemFooter}>
                <Image 
                src={"/phonewhite.png"}
                width={70}
                height={70}
                alt="telefonomaetti"
                className={styles.icono}
                />
                <a target={"_blank"} href="https://wa.me/5491122920919?text=Hola,%20Me%20gustaria%20mas%20informacion">+54 9 11 2292-0919</a>
            </div>
        </footer>
    )
}

export default Footer;