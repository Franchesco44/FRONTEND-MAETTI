import Nav from '../components/Nav/Nav'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (  
        <>
        <Provider store={store}>
            <Head>
              <title>Maetti</title>
              <link rel="icon" href="/logo.JPG" />
            </Head>
            <Nav/>
            <div className='containerMain'>
              <Component {...pageProps} />
            </div>
            <Footer/>
        </Provider>
        </>
  )
}

export default MyApp