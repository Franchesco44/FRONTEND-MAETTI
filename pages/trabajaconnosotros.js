import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FormularioPropiedades from '../components/FormularioPropiedades/FormularioPropiedades';
import HagamosEsto from '../components/HagamosEsto/HagamosEsto';
import Header from "../components/Header/Header"
import { setStaticNav } from '../redux/navSlice/navSlice';

const trabajaconnosotros = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setStaticNav(true))
    }, [])

    return(
        <>
            <Head>
                    <title>{isTranslate ? "Work with us" : "Trabaja con nosotros"}</title>
            </Head>
            {isTranslate ? 
            <Header
                text={"Do you have a property? we can help you rent it."}
                img={"/trabajaConNosotros.png"}
                button={false}
                linkButton={"/"}
            />
            : 
            <Header
                text={"Tenés una propiedad? Queremos ayudarte a rentarla."}
                img={"/trabajaConNosotros.png"}
                button={false}
                linkButton={"/"}
            />
            }
            <FormularioPropiedades/>
            <HagamosEsto/>
        </> 
    )
}

export default trabajaconnosotros