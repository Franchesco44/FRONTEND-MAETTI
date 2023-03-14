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
                text={"Do you have a question? Please fill the form and we will contact you."}
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