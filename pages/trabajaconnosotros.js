import Head from 'next/head';
import axios from "axios"
import { useState } from 'react';
import { useSelector } from 'react-redux'

const trabajaconnosotros = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    const params = new URLSearchParams();

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
                url: 'https://apicliente.onrender.com/submitForm',
                method: 'POST',
                data: params
            })
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
        <>
            <Head>
                    <title>{isTranslate ? "Work with us" : "Trabaja con nosotros"}</title>
            </Head>
            <h3>{isTranslate ? "Work with us" : "Trabaja con nosotros"}</h3>
            {/* <form onSubmit={handleSubmit}>
                <input onChange={(e) => handleChange(e)} type="text" name="nombre" id="nombre" placeholder="nombre"/>
                <input onChange={(e) => handleChange(e)} type="email" name="email" id="email" placeholder="email"/>
                <input onChange={(e) => handleChange(e)} type="text" name="telefono" id="telefono" placeholder="telefono"/>
                <textarea onChange={(e) => handleChange(e)} name="consulta" id="consulta" cols="30" rows="10" placeholder="Consulta"></textarea>
                <input type="submit" value="Enviar consulta"/>
            </form> */}
        </> 
    )
}

export default trabajaconnosotros