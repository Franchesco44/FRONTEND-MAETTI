import Head from 'next/head';
import { useSelector } from 'react-redux'
import Filtros from '../components/Filtros/Filtros';
import Header from '../components/Header/Header';
import HeaderDos from '../components/HeaderDos/HeaderDos';
import PropiedadesLista from "../components/PropiedadesLista/PropiedadesLista"

const propiedades = () => {
    const isTranslate = useSelector((state) => state.translate.value)

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
                width: "100%"
            }}
            >
                <Filtros/>
                <PropiedadesLista/>
            </div>
        </>
    )
}

export default propiedades