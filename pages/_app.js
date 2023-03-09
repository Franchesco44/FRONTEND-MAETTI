import Nav from '../components/Nav/Nav'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import WhatsApp from '../components/WhatsApp/WhatsApp'
import { createTheme, NextUIProvider } from "@nextui-org/react"
import ContenedorGlobal from '../components/ContenedorGlobal/ContenedorGlobal'


// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#fff',
      text: '#fff'
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (  
        <>
        <Provider store={store}>
            <Head>
              <title>Maetti</title>
              <link rel="icon" href="/logo.JPG" />
              <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin/>
              <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossorigin/>
              <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin/>
              <link
                  rel="stylesheet"
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                  crossorigin="anonymous"
                />
            </Head>
            <NextUIProvider theme={lightTheme}>
              <Nav/>
              <WhatsApp/>
              <ContenedorGlobal  >
                <Component {...pageProps} />
              </ContenedorGlobal>
              <Footer/>
            </NextUIProvider>
        </Provider>
        </>
  )
}

export default MyApp