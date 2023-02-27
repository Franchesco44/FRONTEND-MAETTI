import Head from 'next/head';
import { useSelector } from 'react-redux'
import Header from "../components/Header/Header"
import FormularioContacto from "../components/FormularioContacto/FormularioContacto"

const contacto = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <>
            <Head>
                <title>{isTranslate ? "Contact" : "Contacto"}</title>
            </Head>
            {isTranslate ? 
            <Header
                text={"If you have a question, we want to help you, please fill in the following form."}
                img={"/contacto.png"}
                button={false}
                linkButton={"/"}
            />
            : 
            <Header
                text={"Tenes una consulta? queremos ayudarte, responde el siguiente formulario."}
                img={"/contacto.png"}
                button={false}
                linkButton={"/"}
            />
            }
            <FormularioContacto />
        </>
    )
}

export default contacto