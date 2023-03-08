import styles from "./propiedad.module.css"
import { useSelector } from 'react-redux'
import { useRouter } from "next/router";

const propiedad = () => {
    const router = useRouter()
    const isTranslate = useSelector((state) => state.translate.value)
    const {id} = router.query;

    return(
        <div className={styles.propiedadContenedor} >
            <h2>{id}</h2>
        </div>
    )
}

export default propiedad