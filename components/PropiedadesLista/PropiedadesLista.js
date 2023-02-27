import styles from "./PropiedadesLista.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"
import { setPropiedades } from "../../redux/propiedadesSlice/propiedadesSlice"

const PropiedadesLista = () => {

    const dispatch = useDispatch()
    const propiedades = useSelector((state)=> state.propiedades.dataCopy)
    const isTranslate = useSelector((state) => state.translate.value)

    const getPropiedades = async () => {
        try {
            const propiedades = await axios.get('https://apicliente.onrender.com/propiedadesSubidas')
            const data = await propiedades.data
            dispatch(setPropiedades(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getPropiedades()
    }, [])

    return(
        <div className={styles.PropiedadesListaContainer} >
            <h3>{isTranslate ? "Available properties" : "Propiedades disponibles"}</h3>
            <div className={styles.listaPropiedades} >
                {propiedades.map((p, index)=>{
                    return(
                        <div className={styles.propiedad} key={index}>
                            <div
                            className={styles.imagen}
                            style={{backgroundImage: `url(https://apicliente.onrender.com/${p.imagen})`}}
                            ></div>
                            <h4> {p.titulo} </h4>
                            <strong> ${p.precio} ARS por {p.alquiler} </strong>
                            <a target={"_blank"} href={p.url}>{isTranslate ? "VIEW ON AIRBNB" : "VER EN AIRBNB"}</a>
                        </div>  
                    )
                })}
            </div>
        </div>
    )
}

export default PropiedadesLista