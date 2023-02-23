import Head from 'next/head';
import { useSelector } from 'react-redux'

const trabajaconnosotros = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <>
            <Head>
                    <title>{isTranslate ? "Work with us" : "Trabaja con nosotros"}</title>
            </Head>
            <h3>{isTranslate ? "Work with us" : "Trabaja con nosotros"}</h3>
        </> 
    )
}

export default trabajaconnosotros