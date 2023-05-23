import styles from "./FormularioContacto.module.css"
import { useSelector } from 'react-redux'
import { useState } from "react"
import axios from "axios"
import { Loading } from "@nextui-org/react";

const FormularioContacto = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const params = new URLSearchParams();
    const [isLoading, setIsLoading] = useState(false)

    const [dataForm, setDataForm] = useState({
        nombre: "",
        email: "",
        telefono: "",
        consulta: ""
    })

    const sendData = async (data) => {
        params.append('nombre', data.nombre)
        params.append('email', data.email)
        params.append('telefono', data.telefono)
        params.append('consulta', data.consulta)
        try {
            const response = await axios({
                url: 'https://api-maetti.up.railway.app/submitForm',
                method: 'POST',
                data: params
            })
            setIsLoading(false)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleSubmit = (e) => {
        sendData(dataForm)
        e.preventDefault()
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setDataForm({...dataForm, [name]: value })
    }

    return(
        <div className={styles.containerFormulario}>
            <h3>{isTranslate? "Send your inquiry.":"Hacé tu consulta."}</h3>
            {isLoading ? <Loading type="points" /> : 
            <form onSubmit={(e) => {
                setIsLoading(true)
                handleSubmit(e)
            }
            }>
                <input onChange={(e) => handleChange(e)} required type="text" name="nombre" id="nombre" placeholder={isTranslate? "First and last name" : "Nombre y apellido"}/>
                <input onChange={(e) => handleChange(e)} required type="email" name="email" id="email" placeholder="Email"/>
                <input onChange={(e) => handleChange(e)} required type="text" name="telefono" id="telefono" placeholder={isTranslate? "Phone number" : "Numero de telefono"}/>
                <textarea onChange={(e) => handleChange(e)} required name="consulta" id="consulta" cols="30" rows="10" placeholder={isTranslate? "Your question" : "Tu consulta"}></textarea>
                <input type="submit" value={isTranslate? "Send inquiry":"Enviar consulta"}/>
            </form>
            }
        </div>
    )
}

export default FormularioContacto