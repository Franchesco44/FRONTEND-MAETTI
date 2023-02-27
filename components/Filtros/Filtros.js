import styles from "./Filtros.module.css"
import { useSelector, useDispatch } from "react-redux"
import { setFilter } from "../../redux/propiedadesSlice/propiedadesSlice"
import { Dropdown } from "@nextui-org/react";

const Filtros = () => {
    const dispatch = useDispatch()
    const propiedades = useSelector((state)=> state.propiedades.data)
    const isTranslate = useSelector((state) => state.translate.value)

    return(
        <div className={styles.filtrosContainer} >
            <h3>{isTranslate ? "Filter by":"Filtrar por"} </h3>
            <Dropdown>
                <Dropdown.Button color={"default"} light>
                    {isTranslate ? "Type of rental" :"Tipo de alquiler"}
                </Dropdown.Button>
                <Dropdown.Menu
                    color={"default"}
                    variant="light"
                    aria-label="Actions"
                    onAction={(key)=> dispatch(setFilter(key))}
                >
                    <Dropdown.Item 
                        key="todo"
                        >{isTranslate ? "See all" : "Ver todo"}</Dropdown.Item>
                    <Dropdown.Item 
                        key="noche"
                        >{isTranslate ? "Rent per night" : "Alquiler por noche"}</Dropdown.Item>
                    <Dropdown.Item
                        key="mensual"
                        >{isTranslate ? "Monthly rent" : "Alquiler mensual"}</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Button color={"default"} light>
                    {isTranslate ? "Location" :"Ubicacion"}
                </Dropdown.Button>
                <Dropdown.Menu
                    color={"default"}
                    variant="light"
                    aria-label="Actions"
                    onAction={(key)=> dispatch(setFilter(key))}
                >
                    {propiedades.map((p, index)=>{
                        return(
                            <Dropdown.Item
                            key={p.ubicacion}
                            >{p.ubicacion}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Filtros