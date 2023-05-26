import styles from "./HeaderDos.module.css"
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> ec7e09e45ade088d8ba4d394837a9722a0d08692
import { useDispatch, useSelector } from "react-redux";
import { setIsPropiedades } from "../../redux/propiedadesSlice/propiedadesSlice";
import { setIsVehiculo } from "../../redux/vehiculosSlice/vehiculosSlice";

const HeaderDos = () => {
    const [activeItem, setActiveItem] = useState('propiedades');
    const dispatch = useDispatch()
    const isTranslate = useSelector((state)=>state.translate.value)
    const isPropiedades = useSelector((state)=>state.propiedades.isPropiedades)
    const isVehiculos = useSelector((state)=>state.vehiculos.isVehiculos)

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

    useEffect(()=>{

    }, [])

    return(
        <div className={styles.HeaderDosContainer}>
            <ul className={styles.items}>
                <li
                className={isPropiedades ? styles.active : ''}
                onClick={mostrarPropiedades}
                >
                {isTranslate ? "Properties" : "Propiedades"}
                {isPropiedades  && <div className={styles.activeLine}></div>}
                </li>
                <li
                className={isPropiedades ? '' : styles.active }
                onClick={mostrarVehiculos}
                >
                {isTranslate ? "Vehicules" : "Vehiculos"}
                {isPropiedades ? "" : <div className={styles.activeLine}></div>}
                </li>
            </ul>
        </div>
    )
}

export default HeaderDos