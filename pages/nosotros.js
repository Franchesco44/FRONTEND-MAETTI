import Head from 'next/head';
import { useSelector } from 'react-redux'

const Nosotros = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <>
            <Head>
                <title>{isTranslate ? "About us" : "Nosotros"}</title>
            </Head>
            <h3>{isTranslate ? "About us" : "Nosotros"}</h3>
        </>
    )
}