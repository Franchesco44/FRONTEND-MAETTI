import Head from 'next/head';
import { useSelector } from 'react-redux'
import FormularioPropiedades from '../components/FormularioPropiedades/FormularioPropiedades';
import HagamosEsto from '../components/HagamosEsto/HagamosEsto';
import Header from "../components/Header/Header"

const trabajaconnosotros = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <>
            <Head>
                    <title>{isTranslate ? "Work with us" : "Trabaja con nosotros"}</title>
            </Head>
            {isTranslate ? 
            <Header
                text={"Do you have a property? we want to help you rent it."}
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