import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux'
import { setStaticNav } from '../redux/navSlice/navSlice';
import { useEffect } from 'react';
import { setIsInicio } from '../redux/propiedadesSlice/propiedadesSlice';
import HeaderTres from '../components/HeaderTres/HeaderTres';
import BeneficiosContainer from '../components/BeneficiosContainer/BeneficiosContainer';
import styles from '../styles/Home.module.css';

const contacto = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setStaticNav(true))
        dispatch(setIsInicio(false))
    }, [])
    return(
        <div className={styles.container}>
            <Head>
                <title>{isTranslate ? "Benefits" : "Beneficios"}</title>
            </Head>
            <HeaderTres/>
            <BeneficiosContainer/>
        </div>
    )
}

export default contacto