import styles from "./HeaderDos.module.css"

const HeaderDos = ({titulo}) => {
    return(
        <div className={styles.HeaderDosContainer}>
            <h2>{titulo}</h2>
        </div>
    )
}

export default HeaderDos