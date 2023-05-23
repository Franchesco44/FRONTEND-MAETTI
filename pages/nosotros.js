import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux'
import AcercaDe from '../components/AcercaDe/AcercaDe';
import Header from "../components/Header/Header"
import { setStaticNav } from '../redux/navSlice/navSlice';
import { useEffect } from 'react';

const Nosotros = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setStaticNav(true))
    }, [])
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
                text={"Sobre nosotros"}
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