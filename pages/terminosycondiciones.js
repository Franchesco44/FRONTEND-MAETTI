import Head from 'next/head';
import { useSelector } from 'react-redux'

const terminosycondiciones = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <>
            <Head>
                <title>{isTranslate ? "Terms and conditions" : "Terminos y condiciones"}</title>
            </Head>
            <h3>{isTranslate ? "Terms and conditions" : "Terminos y condiciones"}</h3>
        </>
    )
}

export default terminosycondiciones