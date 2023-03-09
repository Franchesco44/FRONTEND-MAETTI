import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux'
import Header from "../components/Header/Header"
import FormularioContacto from "../components/FormularioContacto/FormularioContacto"
import { setStaticNav } from '../redux/navSlice/navSlice';
import { useEffect } from 'react';

const contacto = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setStaticNav(true))
    }, [])
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
                text={"Tenes una consulta? Respondé el siguiente formulario."}
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