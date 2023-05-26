import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header/Header';
import QuienesSomos from '../components/QuienesSomos/QuienesSomos';
import QueHacemos from '../components/QueHacemos/QueHacemos';
import FormularioContacto from '../components/FormularioContacto/FormularioContacto';
import { setStaticNav } from '../redux/navSlice/navSlice';
import { useEffect } from 'react';
import { setIsInicio } from '../redux/propiedadesSlice/propiedadesSlice';
import AcercaDe from '../components/AcercaDe/AcercaDe';
import Footer from '../components/Footer/Footer';

export default function Home() {

  const dispatch = useDispatch()
  const isTranslate = useSelector((state) => state.translate.value)

  useEffect(()=>{
      dispatch(setStaticNav(true))
      dispatch(setIsInicio(false))
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>{isTranslate ? "About us" : "Sobre nosotros"}</title>
      </Head>
      {isTranslate ?  
      <Header 
      text={"The optimization of your property starts here. "}
      img={"/Home.png"}
      button={true}
      linkButton={"/"}
      /> : 
      <Header
      text={"La optimización del alquiler de tu propiedad empieza acá."}
      img={"/Home.png"}
      button={true}
      />}
      <QuienesSomos/>
      <QueHacemos/>
      <AcercaDe/>
      <FormularioContacto/>
      <Footer/>
    </div>
  )
}
