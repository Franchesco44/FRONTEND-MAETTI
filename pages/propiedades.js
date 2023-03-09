import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux'
import Filtros from '../components/Filtros/Filtros';
import HeaderDos from '../components/HeaderDos/HeaderDos';
import PropiedadesLista from "../components/PropiedadesLista/PropiedadesLista"
import { setStaticNav } from '../redux/navSlice/navSlice';
import { useEffect } from 'react';

const propiedades = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setStaticNav(true))
    }, [])
    
    return(
        <>
            <Head>
                <title>{isTranslate ? "Properties" : "Propiedades"}</title>
            </Head>
            {isTranslate ? 
            <HeaderDos
            titulo={"Properties"}
            />
            :
            <HeaderDos
            titulo={"Propiedades"}
            />
            }
            <div
            style={{
                display: "flex",
                width: "100%",
                height: "80vh"
            }}
            >
                <Filtros/>
                <PropiedadesLista/>
            </div>
        </>
    )
}

export default propiedades