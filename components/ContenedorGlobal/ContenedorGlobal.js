import styles from "./ContenedorGlobal.module.css"
import { useSelector } from 'react-redux'

const ContenedorGlobal = ({children}) => {
    const isFixed = useSelector((state) => state.nav.isFixed)
    return(
        <div className={isFixed ? styles.fixed : styles.nofixed}>
            {children} 
        </div>
    )
}

export default ContenedorGlobal