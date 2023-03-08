import styles from "./AcercaDe.module.css"
import { useSelector } from 'react-redux'

const AcercaDe = () => {
    const isTranslate = useSelector((state) => state.translate.value)
    return(
        <div className={styles.acercaDeContainer}>
            <h3> {isTranslate ? "" : "NOSOTROS"} </h3>
            <p>{isTranslate ?"We are a team dedicated to manage properties through online rental platforms. We take care of getting your properties rented as fast as possible at the best prices in the market, in dollars.":"Somos un equipo de trabajo que se dedica a gestionar propiedades mediante plataformas de alquileres online. Nos encargamos de hacer que tus propiedades se alquilen lo más rápido posible a los mejores precios del mercado, en dólares."}
            </p>
            <ul>
                <li>{isTranslate ? "The first step is to create an attractive publication which conforms to the standards dictated by the property owner, talk to potential the property owner, talk to potential guests and make reservations." : "El primer paso es crear una publicación atractiva la cual se ajuste a las normas dictadas por el dueño de la propiedad, hablar con los potenciales huéspedes y concretar reservaciones."} </li>
                <li>{isTranslate ? "Then, we will analyze the profile of the guests so that their stay does not their stay will not be detrimental to the owner. We will keep you informed at all times, with constant transparency, about the days they will stay and the and the income generated (the commission will be 12% of these)." : "Luego, analizaremos el perfil de los huéspedes para que su estadía no perjudique al propietario. En todo momento te mantendremos informado, con una transparencia constante, sobre los días en que se hospedarán y los ingresos generados (la comisión será del 12% de estos)."} </li>
                <li>{isTranslate ? "The money will be automatically sent to your PayPal account (USD) within 24 to 48 hours after the guest's check-in of the guests. If you wish, you have the option to receive Argentine pesos to your bank account. We will advise you so that you can do it the best exchange rate, so the conversion is not affected by the official affected by the official dollar price and taxes." : "El dinero será automáticamente enviado a tu cuenta de PayPal (USD) en 24 a 48 horas después del check-in de los huéspedes. Si lo deseás, tenés la opción de recibir pesos argentinos a tu cuenta bancaria. Te asesoraremos para que puedas hacerlo al mejor tipo de cambio, así la conversión no sea afectada por el precio dólar oficial e impuestos."}  </li>
            </ul>
            <h3>{isTranslate ? "To work with MAETTI is to have efficiency and trust in us. Let's do this together.": "Trabajar con MAETTI es tener eficiencia y confianza en nosotros. Hagamos esto juntos."} </h3>
        </div>
    )
}

export default AcercaDe;