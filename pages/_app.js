

import Head from 'next/head'
import { AuthContextProvider } from '../components/store/AuthContext'
import store from '../components/store/store'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Script from 'next/script'
import { useAmp } from 'next/amp'
const MyApp = ({ Component, pageProps }) => {
  const isAmp = useAmp();
  useEffect(() => {
    AOS.init();
    AOS.init({
      duration: 1500,
    })
  }, [])
  
  useEffect(() => {
  if (!isAmp) {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X976PZJF76');
  }
  }, [])
  
  return (

    <Provider store={store}>
    <AuthContextProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
      </Head>
        <Script id="google_analytics_1" async src="https://www.googletagmanager.com/gtag/js?id=G-X976PZJF76"></Script>
        {!isAmp &&
        <Script id="google_analytics_2" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date());
        
          gtag('config', 'G-X976PZJF76');
        `}
        </Script>}
 
          <ToastContainer />
          <Component {...pageProps} />
        </AuthContextProvider>
      </Provider>

  )
}

export default MyApp
