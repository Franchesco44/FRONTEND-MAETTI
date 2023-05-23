import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux'
import HeaderDos from '../components/HeaderDos/HeaderDos';
import PropiedadesLista from "../components/PropiedadesLista/PropiedadesLista"
import { setStaticNav } from '../redux/navSlice/navSlice';
import { useEffect } from 'react';
import VehiculosLista from '../components/VehiculosLista/VehiculosLista'
import { setIsInicio } from '../redux/propiedadesSlice/propiedadesSlice';

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
            <HeaderDos/>
            <div
            style={{
                display: "flex",
                width: "100%",
                height: "80vh"
            }}
            >
                {isPropiedades ? <PropiedadesLista/> : <VehiculosLista/> }
            </div>
        </>
    )
}

export default propiedades