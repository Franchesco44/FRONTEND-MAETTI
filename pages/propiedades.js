import Head from 'next/head';
import { useSelector } from 'react-redux'

const propiedades = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <>
            <Head>
                <title>{isTranslate ? "Properties" : "Propiedades"}</title>
            </Head>
            <h3>{isTranslate ? "Properties" : "Propiedades"}</h3>
        </>
    )
}

export default propiedades