import Link from "next/link"
import styles from "./Nav.module.css"
import { useSelector, useDispatch } from 'react-redux'
import {español, english} from "../../redux/translateSlice/translateSlice"
import { Dropdown } from "@nextui-org/react";
import Image from 'next/image'
import {  useState } from "react";
import { experiencias } from "../../utils/experiencias";
import { useRouter } from "next/router";

const Nav = () => {
    const dispatch = useDispatch()
    const isTranslate = useSelector((state) => state.translate.value)
    const isFixed = useSelector((state) => state.nav.isFixed)
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return(
        <nav className={styles.nav}
        style={isFixed ? {position: "fixed"} : {position: "relative"}}>
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
                <Link onClick={() => setIsOpen(false)} href={"/"}>{isTranslate ? "Home" : "Inicio"}</Link>
                <Link onClick={() => setIsOpen(false)} href={"/propiedades"}>{isTranslate ? "Properties" : "Propiedades"}</Link>
                <Link onClick={() => setIsOpen(false)} href={"/trabajaconnosotros"}>{isTranslate ? "Work with us" : "Trabajá con nosotros"}</Link>
                <Link onClick={() => setIsOpen(false)} href={"/contacto"}>{isTranslate ? "Contact" : "Contacto"}</Link>
                <Link onClick={() => setIsOpen(false)} href={"/nosotros"}>{isTranslate ? "About us" : "Nosotros"}</Link>
                {/* <Dropdown>
                    <Dropdown.Button color={"default"} light>
                    {isTranslate ? "Experiences" : "Experiencias"}
                    </Dropdown.Button>
                    <Dropdown.Menu
                    color={"default"}
                    variant="light"
                    aria-label="Actions"
                    onAction={(key)=> router.push(`/experiencia/${key}`)}
                    >
                        {experiencias.map((e)=>{
                            return(
                            <Dropdown.Item 
                            key={e.es.titulo}
                            onClick={() => setIsOpen(false)}
                            >
                                {isTranslate ? e.en.titulo : e.es.titulo}
                            </Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown> */}
            </div>
            <ul>
                <Link href={"/"}>{isTranslate ? "Home" : "Inicio"}</Link>
                <Link href={"/propiedades"}>{isTranslate ? "Properties" : "Propiedades"}</Link>
                <Link href={"/trabajaconnosotros"}>{isTranslate ? "Work with us" : "Trabajá con nosotros"}</Link>
                <Link href={"/contacto"}>{isTranslate ? "Contact" : "Contacto"}</Link>
                <Link href={"/nosotros"}>{isTranslate ? "About us" : "Nosotros"}</Link>
                {/* <div className={styles.experienciasLink} >   
                    <Dropdown>
                        <Dropdown.Button color={"default"} light>
                        {isTranslate ? "Experiences" : "Experiencias"}
                        </Dropdown.Button>
                        <Dropdown.Menu
                        color={"default"}
                        variant="light"
                        aria-label="Actions"
                        onAction={(key)=> router.push(`/experiencia/${key}`)}
                        >
                            {experiencias.map((e)=>{
                                return(
                                <Dropdown.Item 
                                key={e.es.titulo}
                                >
                                    {isTranslate ? e.en.titulo : e.es.titulo}
                                </Dropdown.Item>
                                )
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
                </div> */}
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