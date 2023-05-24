import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux'
import HeaderDos from '../components/HeaderDos/HeaderDos';
import PropiedadesLista from "../components/PropiedadesLista/PropiedadesLista"
import { setStaticNav } from '../redux/navSlice/navSlice';
import { useEffect } from 'react';
import VehiculosLista from '../components/VehiculosLista/VehiculosLista'
import { setIsInicio } from '../redux/propiedadesSlice/propiedadesSlice';
import styles from "../styles/Home.module.css"
import NavBarDinamica from '../components/NavBarDinamica/NavBarDinamica';
import ContenedorGlobal from '../components/ContenedorGlobal/ContenedorGlobal';

const propiedades = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const isPropiedades = useSelector((state) => state.propiedades.isPropiedades)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setStaticNav(true))
        dispatch(setIsInicio(true))
    }, [])
    
    return(
        <>
            <Head>
                <title>{isTranslate ? "Home" : "Inicio"}</title>
            </Head>
            <ContenedorGlobal>
                <HeaderDos/>
                <div
                className={styles.containerGlobalLista}
                style={{
                    display: "flex",
                    width: "100%",
                    height: "80vh"
                }}
                >
                    {isPropiedades ? <PropiedadesLista/> : <VehiculosLista/> }
                </div>
            </ContenedorGlobal>
        </>
    )
}

export default propiedades