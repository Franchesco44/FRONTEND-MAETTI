import Nav from '../components/Nav/Nav'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import WhatsApp from '../components/WhatsApp/WhatsApp'
import { createTheme, NextUIProvider } from "@nextui-org/react"

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
            </Head>
            <NextUIProvider theme={lightTheme}>
              <Nav/>
              <WhatsApp/>
              <div className='containerMain'>
                <Component {...pageProps} />
              </div>
              <Footer/>
            </NextUIProvider>
        </Provider>
        </>
  )
}

export default MyApp