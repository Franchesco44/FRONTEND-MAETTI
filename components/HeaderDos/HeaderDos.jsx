import styles from "./HeaderDos.module.css"
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setIsPropiedades } from "../../redux/propiedadesSlice/propiedadesSlice";
import { setIsVehiculo } from "../../redux/vehiculosSlice/vehiculosSlice";

const HeaderDos = () => {
    const [activeItem, setActiveItem] = useState('propiedades');
    const dispatch = useDispatch()
    const isTranslate = useSelector((state)=>state.translate.value)

    const mostrarPropiedades = () => {
        setActiveItem('propiedades');
        dispatch(setIsPropiedades(true))
        dispatch(setIsVehiculo(false))
    };
    
    const mostrarVehiculos = () => {
        setActiveItem('vehiculos');
        dispatch(setIsPropiedades(false))
        dispatch(setIsVehiculo(true))
    };

    return(
        <div className={styles.HeaderDosContainer}>
            <ul className={styles.items}>
                <li
                className={activeItem === 'propiedades' ? styles.active : ''}
                onClick={mostrarPropiedades}
                >
                {isTranslate ? "Properties" : "Propiedades"}
                {activeItem === 'propiedades' && <div className={styles.activeLine}></div>}
                </li>
                <li
                className={activeItem === 'vehiculos' ? styles.active : ''}
                onClick={mostrarVehiculos}
                >
                {isTranslate ? "Vehicules" : "Vehiculos"}
                {activeItem === 'vehiculos' && <div className={styles.activeLine}></div>}
                </li>
            </ul>
        </div>
    )
}

export default HeaderDos