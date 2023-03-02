import styles from "./DiasTarjeta.module.css"

const DiasTarjeta = ({data}) => {

    return(
        <div className={styles.diaTarjeta} >
            <div style={{display: "flex", alignItems: "center"}}>
                <h4 style={{marginRight: "10px"}}> {data.titulo}: </h4>
                <h4 style={{color: "gray"}}> {data.fecha} </h4>
            </div>
            <h3> {data.subtitulo} </h3>
            <p> {data.descripcion} </p>
        </div>
    )
}

export default DiasTarjeta