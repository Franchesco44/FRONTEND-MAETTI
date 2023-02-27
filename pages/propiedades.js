import Head from 'next/head';
import { useSelector } from 'react-redux'
import Filtros from '../components/Filtros/Filtros';
import PropiedadesLista from "../components/PropiedadesLista/PropiedadesLista"

const propiedades = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <>
            <Head>
                <title>{isTranslate ? "Properties" : "Propiedades"}</title>
            </Head>
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