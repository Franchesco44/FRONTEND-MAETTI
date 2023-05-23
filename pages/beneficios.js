import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux'
import { setStaticNav } from '../redux/navSlice/navSlice';
import { useEffect } from 'react';
import { setIsInicio } from '../redux/propiedadesSlice/propiedadesSlice';
import HeaderTres from '../components/HeaderTres/HeaderTres';
import BeneficiosContainer from '../components/BeneficiosContainer/BeneficiosContainer';

const contacto = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setStaticNav(true))
        dispatch(setIsInicio(false))
    }, [])
    return(
        <>
            <Head>
                <title>{isTranslate ? "Benefits" : "Beneficios"}</title>
            </Head>
            <HeaderTres/>
            <BeneficiosContainer/>
        </>
    )
}

export default contacto