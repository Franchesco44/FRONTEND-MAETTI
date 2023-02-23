import Link from "next/link"
import styles from "./Nav.module.css"
import { useSelector, useDispatch } from 'react-redux'
import {español, english} from "../../redux/translateSlice/translateSlice"
import { Dropdown } from "@nextui-org/react";
import Image from 'next/image'
import { useState } from "react";

const Nav = () => {
    const dispatch = useDispatch()
    const isTranslate = useSelector((state) => state.translate.value)
    const [isOpen, setIsOpen] = useState(false)

    return(
        <nav className={styles.nav}>
            <Link href={"/"}>
                <Image
                src={"/logoletras.png"}
                width={120}
                height={60}
                alt="LogoMaetti"
                />
            </Link>
            <Image
            src={"/menu.png"}
            width={30}
            height={30}
            alt="menu"
            onClick={() => setIsOpen(true)}
            className={styles.menuIcon}
            />
            <div className={styles.navMobile}
            style={isOpen ? {transform: "translate(0vh)"} : {transform: "translate(-500vw)"}}
            >
                <Image
                src={"/circle.png"}
                width={30}
                height={30}
                alt="closemenu"
                onClick={() => setIsOpen(false)}
                />
                <Link href={"/"}>{isTranslate ? "Home" : "Inicio"}</Link>
                <Link href={"/trabajaconnosotros"}>{isTranslate ? "Work with us" : "Trabaja con nosotros"}</Link>
                <Link href={"/contacto"}>{isTranslate ? "Contact" : "Contacto"}</Link>
                <Link href={"/propiedades"}>{isTranslate ? "Properties" : "Propiedades"}</Link>
                <Link href={"/nosotros"}>{isTranslate ? "About us" : "Nosotros"}</Link>
            </div>
            <ul>
                <Link href={"/"}>{isTranslate ? "Home" : "Inicio"}</Link>
                <Link href={"/trabajaconnosotros"}>{isTranslate ? "Work with us" : "Trabaja con nosotros"}</Link>
                <Link href={"/contacto"}>{isTranslate ? "Contact" : "Contacto"}</Link>
                <Link href={"/propiedades"}>{isTranslate ? "Properties" : "Propiedades"}</Link>
                <Link href={"/nosotros"}>{isTranslate ? "About us" : "Nosotros"}</Link>
                <Dropdown>
                    <Dropdown.Button color={"default"} light>
                    Idioma
                    </Dropdown.Button>
                    <Dropdown.Menu
                    color={"default"}
                    variant="light"
                    aria-label="Actions"
                    onAction={(key)=>{key === "español" ? dispatch(español()) : dispatch(english())}}
                    >
                        <Dropdown.Item 
                        key="español"
                        >Español</Dropdown.Item>
                        <Dropdown.Item
                        key="ingles"
                        >Ingles</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
        </nav>
    )
}

export default Nav;