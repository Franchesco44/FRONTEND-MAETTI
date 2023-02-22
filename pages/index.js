import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header/Header';
import QuienesSomos from '../components/QuienesSomos/QuienesSomos';

export default function Home() {

  const dispatch = useDispatch()
  const isTranslate = useSelector((state) => state.translate.value)

  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <Header/>
      <QuienesSomos/>
    </div>
  )
}
