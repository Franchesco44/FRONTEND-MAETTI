import Head from 'next/head';
import { useSelector } from 'react-redux'
import AcercaDe from '../components/AcercaDe/AcercaDe';
import Header from "../components/Header/Header"

const Nosotros = () => {
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <>
            <Head>
                <title>{isTranslate ? "About us" : "Nosotros"}</title>
            </Head>
            {isTranslate ? 
            <Header
                text={"We tell you more about us!"}
                img={"/Nosotros.png"}
                button={false}
                linkButton={"/"}
            />
            : 
            <Header
                text={"Te contamos mas acerca de nosotros!"}
                img={"/Nosotros.png"}
                button={false}
                linkButton={"/"}
            />
            }
            <AcercaDe/>
        </>
    )
}

export default Nosotros