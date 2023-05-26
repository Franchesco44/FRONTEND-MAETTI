import Link from "next/link"
import styles from "./Nav.module.css"
import { useSelector, useDispatch } from 'react-redux'
import {español, english} from "../../redux/translateSlice/translateSlice"
import Image from 'next/image'
import {  useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import FiltrosNav from "../FiltrosNav/FiltrosNav";


const Nav = () => {
    const dispatch = useDispatch()
    const isTranslate = useSelector((state) => state.translate.value)
    const isInicio = useSelector((state) => state.propiedades.isInicio)
    const isFixed = useSelector((state) => state.nav.isFixed)
    const [isOpen, setIsOpen] = useState(false)
    const [isLanguaje, setIsLanguaje] = useState(false)
    const router = useRouter()
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <nav className={styles.nav}
        style={isFixed ? {position: "fixed"} : {position: "relative"}}>
            <Link href={"/"}>
                <Image
                src={"/techologo.png"}
                width={120}
                height={60}
                alt="LogoMaetti"
                className={styles.logo}
                />
            </Link>
            {isInicio ? <FiltrosNav/> : ""}
            <div className={styles.containerDropdown}>
                <div className={styles.dropdownTitle}
                onClick={()=>setIsOpen(!isOpen)}
                >
                    <strong>Menu</strong>
                    <Image 
                    src={"/arrowdown.png"}
                    height={10}
                    width={10}
                    alt="arrowdownicon"
                    />
                </div>
                <div className={isOpen ? styles.dropdown : styles.dropdownOcult} ref={dropdownRef}>
                    <div className={styles.dropdownItem} onClick={() => setIsLanguaje(!isLanguaje)}>
                        <strong>{isTranslate ? "Languaje" : "Lenguaje"} </strong>
                        <Image 
                        src={"/arrowdown.png"}
                        height={10}
                        width={10}
                        alt="arrowdownicon"
                        />
                    </div>
                    <div className={isLanguaje ? styles.lenguajeContainer : styles.lenguajeContainerOcult}>
                        <small  onClick={() =>  {
                            dispatch(español())
                            setIsOpen(false)
                        }}>{isTranslate ? "-Spanish" : "-Español"} </small>
                        <small  onClick={() => {
                            dispatch(english())
                            setIsOpen(false)
                        }}>{isTranslate ? "-English" : "-Ingles"} </small>
                    </div>
                    <div className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                        <Link href={"/sobrenosotros"}>{isTranslate ? "About us" : "Sobre nosotros"} </Link>
                    </div>
                    <div className={styles.dropdownItem} onClick={() => setIsOpen(false)}>
                        <Link href={"/beneficios"}>{isTranslate ? "Benefits" : "Beneficios"} </Link>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Nav;