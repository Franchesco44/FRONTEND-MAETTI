import styles from "./AcercaDe.module.css"
import { useSelector } from 'react-redux'

const AcercaDe = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <div className={styles.acercaDeContainer}>
            <h3> {isTranslate ? "ABOUT US" : "NOSOTROS"} </h3>
            <strong>{isTranslate ?"We are a team dedicated to manage properties through online rental platforms. We take care of getting your properties rented as fast as possible at the best prices in the market.":"Somos un equipo de trabajo que se dedica a gestionar propiedades mediante plataformas de alquileres online. Nos encargamos de hacer que tus propiedades se alquilen lo más rápido posible a los mejores precios del mercado, en dólares."}
            </strong>
            <ul>
                <li>{isTranslate ? "The first step is creating an attractive announcement with all the rules dictated by the owner of the property, Talk to potential guests and confirm new reservations." : "El primer paso es crear una publicación atractiva la cual se ajuste a las normas dictadas por el dueño de la propiedad, hablar con los potenciales huéspedes y concretar reservaciones."} </li>
                <li>{isTranslate ? "We analyze the profile of the guests so they don't cause any problem on the property. We will keep the owner of the property informed at all times with constant transparency about all the things related to the reservation" : "Luego, analizaremos el perfil de los huéspedes para que su estadía no perjudique al propietario. En todo momento te mantendremos informado, con una transparencia constante, sobre los días en que se hospedarán y los ingresos generados (la comisión será del 12% de estos)."} </li>
                <li>{isTranslate ? "The money will be automatically sent to your selected payment method within 24hs - 48hs after the guests check in. If you wish, you have the option to receive Argentine pesos to your bank account. We will advise you so that you can do it the best exchange rate, so the conversion is not affected by the official affected by the official dollar price and taxes." : "El dinero será automáticamente enviado a tu cuenta de PayPal (USD) en 24 a 48 horas después del check-in de los huéspedes. Si lo deseás, tenés la opción de recibir pesos argentinos a tu cuenta bancaria. Te asesoraremos para que puedas hacerlo al mejor tipo de cambio, así la conversión no sea afectada por el precio dólar oficial e impuestos."}  </li>
            </ul>
            <h3>{isTranslate ? "Working with MAETTI is having efficiency and trust in us. Let’s do this together": "Trabajar con MAETTI es tener eficiencia y confianza en nosotros. Hagamos esto juntos."} </h3>
        </div>
    )
}

export default AcercaDe;