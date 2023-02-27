import styles from "./Filtros.module.css"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { setFilterUbicacion, setFilterAlquiler, setFilterAll } from "../../redux/propiedadesSlice/propiedadesSlice"

const Filtros = () => {
    const dispatch = useDispatch()
    const propiedades = useSelector((state)=> state.propiedades.data)
    const isTranslate = useSelector((state) => state.translate.value)

    const handleSelectUbicacion = (e) => {
        dispatch(setFilterUbicacion(e.target.value))
    }

    const handleSelectAlquiler = (e) => {
        dispatch(setFilterAlquiler(e.target.value))
    }

    const handleSelectAll = () => {
        dispatch(setFilterAll())
    }

    return(
        <div className={styles.filtrosContainer} >
            <h3>{isTranslate ? "Filter by":"Filtrar por"} </h3>
            <div>
                <div className={styles.listaFiltros}>
                    <div className={styles.filtro} >
                        <input onChange={handleSelectAll} name="todo" type="checkbox" value="todo"/>
                        <label htmlFor="todo">{isTranslate ? "See all " : "Ver todo"}</label>
                    </div>
                </div>
            </div>
            <div>
                <strong> {isTranslate ? "Location" :"Ubicacion"} </strong>
                <div className={styles.listaFiltros}>
                    {propiedades.map((p, index)=>{
                        return(
                            <div key={index} className={styles.filtro} >
                                <input onChange={handleSelectUbicacion} name="ubicacion" type="checkbox" value={p.ubicacion}/>
                                <label htmlFor="ubicacion">{p.ubicacion}</label>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <strong> {isTranslate ? "Type of rental" :"Tipo de alquiler"} </strong>
                <div className={styles.listaFiltros}>
                    <div className={styles.filtro}>
                        <input onChange={handleSelectAlquiler} name="alquilernoche" type="checkbox" value="noche"/>
                        <label htmlFor="alquilernoche">{isTranslate ? "Rent per night" : "Alquiler por noche"}</label>
                    </div>
                    <div className={styles.filtro}>
                        <input onChange={handleSelectAlquiler} name="alquilermensual" type="checkbox" value="mensual"/>
                        <label htmlFor="alquilermensual"> {isTranslate ? "Monthly rent" : "Alquiler mensual"} </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filtros