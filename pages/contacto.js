import Head from 'next/head';
import { useSelector } from 'react-redux'

const contacto = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <>
            <Head>
                <title>{isTranslate ? "Contact" : "Contacto"}</title>
            </Head>
            <h3>{isTranslate ? "Contact" : "Contacto"}</h3>
        </>
    )
}

export default contacto