import styles from "./FormularioPropiedades.module.css"
import { useSelector } from 'react-redux'
import { useState } from "react"
import axios from "axios"
import { Loading } from "@nextui-org/react";

const FormularioPropiedades = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const params = new URLSearchParams();

    const [dataForm, setDataForm] = useState({
        nombre: "",
        nacimiento: "",
        dni: "",
        email: "",
        telefono: "",
        ciudadnatal: "",
        codigopostal: "",
        contacto: "",
        direccion: "",
        ciudad: "",
        barrio: "",
        rangoprecio: "",
        servicios: "",
        cantidadhuespedes: "",
        limpiezatarifa: "",
        estadiaminima: "",
        estadiamaxima: "",
        diasaviso: "",
        tiempopreparacion: "",
        diasrestringidos: "",
        horariocheckin: "",
        horariocheckout: "",
        infomascotas: "",
        infofumar:"",
        infoadicionales: "",
        infowifi: "",
        infopagos: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    const sendData = async (data) => {
        params.append('nombre', data.nombre)
        params.append('nacimiento', data.nacimiento)
        params.append('dni', data.dni)
        params.append('email', data.email)
        params.append('telefono', data.telefono)
        params.append('ciudadnatal', data.ciudadnatal)
        params.append('codigopostal', data.codigopostal)
        params.append('contacto', data.contacto)
        params.append('direccion', data.direccion)
        params.append('ciudad', data.ciudad)
        params.append('barrio', data.barrio)
        params.append('rangoprecio', data.rangoprecio)
        params.append('cantidadhuespedes', data.cantidadhuespedes)
        params.append('limpiezatarifa', data.limpiezatarifa)
        params.append('estadiaminima', data.estadiaminima)
        params.append('estadiamaxima', data.estadiamaxima)
        params.append('diasaviso', data.diasaviso)
        params.append('tiempopreparacion', data.tiempopreparacion)
        params.append('diasrestringidos', data.diasrestringidos)
        params.append('horariocheckin', data.horariocheckin)
        params.append('horariocheckout', data.horariocheckout)
        params.append('infomascotas', data.infomascotas)
        params.append('infofumar', data.infofumar)
        params.append('infoadicionales', data.infoadicionales)
        params.append('infowifi', data.infowifi)
        params.append('infopagos', data.infopagos)
        try {
            const response = await axios({
                url: 'https://api-maetti.up.railway.app/submitProperty',
                method: 'POST',
                data: params
            })
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleSubmit = () => {
        sendData(dataForm)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setDataForm({...dataForm, [name]: value })
    }

    return(
        <div className={styles.formularioContainer}>
            <h3>{isTranslate? "Register your property and we will contact you":"Registrá tu propiedad y nos contactaremos contigo"}</h3>
            {isLoading ? <Loading type="points" /> : 
            <div className={styles.formularios}>
                <div className={styles.formulario}>
                    <h4> {isTranslate? "Owner information" : "Informacion de propietario"} </h4>
                    <label for="nombre">{isTranslate? "First and last name" : "Nombre y apellido"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="nombre"/>
                    <label for="nacimiento">{isTranslate? "Date of birth" : "Fecha de nacimiento"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="nacimiento" placeholder="xx/xx/xxxx"/>
                    <label for="dni">{isTranslate? "DNI" : "DNI"}</label>
                    <input onChange={(e) => handleChange(e)} required type="number" name="dni"/>
                    <label for="email">{isTranslate? "Email" : "Email"}</label>
                    <input onChange={(e) => handleChange(e)} required type="email" name="email" placeholder={isTranslate? "youremail@hotmail.com" : "tuemail@hotmail.com"}/>
                    <label for="telefono">{isTranslate? "Phone number" : "Número de telefono"}</label>
                    <input onChange={(e) => handleChange(e)} required type="number" name="telefono" placeholder={isTranslate? "Only numbers" : "Solo numeros"}/>
                    <label for="ciudadnatal">{isTranslate? "Hometown" : "Ciudad natal"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="ciudadnatal"/>
                    <label for="codigopostal">{isTranslate? "Zip Code" : "Código postal"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="codigopostal"/>
                    <label for="contacto">{isTranslate? "Reason for contact" : "Motivo de contacto"}</label>
                    <textarea onChange={(e) => handleChange(e)} cols="30" rows="10" required type="text" name="contacto"/>
                </div>
                <div className={styles.formulario}>
                    <h4> {isTranslate? "Property information." : "Informacion de propiedad."} </h4>
                    <label for="direccion">{isTranslate? "Address" : "Direccion"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="direccion"/>
                    <label for="ciudad">{isTranslate? "City" : "Ciudad"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="ciudad"/>
                    <label for="barrio">{isTranslate? "Neighborhood" : "Barrio"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="barrio"/>
                    <label for="rangoprecio">{isTranslate? "Desired price range per night" : "Rango de Precio por noche deseado"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="rangoprecio" placeholder={isTranslate? "For example: 200$ to 500$" : "Ej: 200$ a 500$"}/>
                    <label for="servicios">{isTranslate? "What services do you have" : "Qué servicios tiene"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="servicios"/>
                    <label for="cantidadhuespedes">{isTranslate? "Number of guests" : "Cantidad de huéspedes"}</label>
                    <input onChange={(e) => handleChange(e)} required type="number" name="cantidadhuespedes" placeholder={isTranslate? "Insert only number" : "Colocar solo numeros"}/>
                    <label for="limpiezatarifa">{isTranslate? "Cleaning fee" : "Tarifa de limpieza"}</label>
                    <input onChange={(e) => handleChange(e)} required type="number" name="limpiezatarifa" placeholder={isTranslate? "Insert only number" : "Colocar solo numeros"}/>
                    <label for="estadiaminima">{isTranslate? "Minimum length of stay" : "Duración mínima de la estadía"}</label>
                    <input onChange={(e) => handleChange(e)} required type="number" name="estadiaminima" placeholder={isTranslate? "Insert only number of days" : "Colocar solo numero de dias"}/>
                    <label for="estadiaminima">{isTranslate? "Maximum length of stay" : "Duración maxima de la estadía"}</label>
                    <input onChange={(e) => handleChange(e)} required type="number" name="estadiamaxima" placeholder={isTranslate? "Insert only number of days" : "Colocar solo numero de dias"}/>
                    <label for="diasaviso">{isTranslate? "How many days' notice do you need":"¿Cuántos días de pre aviso necesita?"}</label>
                    <input onChange={(e) => handleChange(e)} required type="number" name="diasaviso" placeholder={isTranslate? "Insert only number of days" : "Colocar solo numero de dias"}/>
                    <label for="tiempopreparacion">{isTranslate? "How much preparation time between host and host do you need (0,1 or 2 days max)?":"¿Cuánto tiempo de preparación entre huésped y huésped necesita? (0, 1 o 2 días max)"}</label>
                    <input onChange={(e) => handleChange(e)} required type="number" name="tiempopreparacion" placeholder={isTranslate? "Insert only number of days" : "Colocar solo numero de dias"}/>
                    <label for="diasrestringidos">{isTranslate? "Restricted check-in days":"Días restringidos para hacer el check in"}</label>
                    <input onChange={(e) => handleChange(e)} required type="number" name="diasrestringidos" placeholder={isTranslate? "Insert only number of days" : "Colocar solo numero de dias"}/>
                    <label for="horariocheckin">{isTranslate? "Time range for check in":"Rango horario para check in"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="horariocheckin" placeholder={isTranslate? "For example: 10:00AM to 12:00AM" : "Ej: 10:00AM a 12:00AM"}/>
                    <label for="horariocheckout">{isTranslate? "Time range for check out":"Rango horario para check out"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="horariocheckout" placeholder={isTranslate? "For example: 10:00AM to 12:00AM" : "Ej: 10:00AM a 12:00AM"}/>
                    <label for="infomascotas">{isTranslate? "Do you accept pets or not, if you accept pets do you charge an extra fee for accepting them?":"¿Acepta o no mascotas? de si aceptar mascotas ¿Cobra una tarifa extra por aceptarlas?"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="infomascotas"/>
                    <label for="infofumar">{isTranslate? "Do you allow electronic cigarettes or smoking?":"¿Permite cigarrillos electrónicos o fumar?"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="infofumar"/>
                    <label for="infoadicionales">{isTranslate? "Additional standards":"Normas adicionales"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="infoadicionales"/>
                    <label for="infowifi">{isTranslate? "Wifi network information":"Información sobre la red wifi"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="infowifi"/>
                    <label for="infopagos">{isTranslate? "Where you wish to receive payments (Paypal or foreign bank account)":"Donde desea recibir los pagos (Paypal o Cuenta bancaria en el extranjero)"}</label>
                    <input onChange={(e) => handleChange(e)} required type="text" name="infopagos"/>
                </div>
            </div>
            }
            <button onClick={() => {
                setIsLoading(true)
                handleSubmit()
            }
            }>{isTranslate ? "Send" : "Enviar"}</button>
        </div>
    )
}

export default FormularioPropiedades