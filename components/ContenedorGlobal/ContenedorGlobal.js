import styles from "./ContenedorGlobal.module.css"
import { useSelector } from 'react-redux'

const ContenedorGlobal = ({children}) => {
    const isFixed = useSelector((state) => state.nav.isFixed)
    return(
        <div className={styles.contenedor} style={isFixed ? {paddingTop: "100px"} : {paddingTop: "0px"}}>
            {children}
        </div>
    )
}

export default ContenedorGlobal