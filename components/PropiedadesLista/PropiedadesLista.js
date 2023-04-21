import styles from "./PropiedadesLista.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { setPropiedades } from "../../redux/propiedadesSlice/propiedadesSlice"
import Link from "next/link"

const PropiedadesLista = () => {

    const dispatch = useDispatch()
    const propiedades = useSelector((state)=> state.propiedades.dataCopy)
    const isTranslate = useSelector((state) => state.translate.value)

    const getPropiedades = async () => {
        try {
            const propiedades = await axios.get('https://api-maetti.up.railway.app/propiedadesSubidas')
            const data = await propiedades.data
            dispatch(setPropiedades(data))
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getPropiedades()
    }, [])

    return(
        <div className={styles.PropiedadesListaContainer} >
            <div className={styles.listaPropiedades} >
                {propiedades.map((p, index)=>{
                    return(
                        <div className={styles.propiedad} key={index}>
                            <div
                            className={styles.imagen}
                            style={{backgroundImage: `url(https://api-maetti.up.railway.app/${p.imagen[0]})`}}
                            ></div>
                            <h4> {isTranslate ? p.tituloIngles : p.titulo} </h4>
                            <strong> ${p.precio} USD | {p.alquiler} </strong>
                            <Link href={`/propiedad/${p._id}`}>{isTranslate ? "VIEW MORE" : "VER MAS"}</Link>
                        </div>  
                    )
                })}
            </div>
        </div>
    )
}

export default PropiedadesLista