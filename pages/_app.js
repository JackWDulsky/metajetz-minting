import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import '../css/style.css'
import '../css/clouds.css'
import '../css/intro.css'
import Head from 'next/head'
import { config } from '../dapp.config'
import Script from 'next/script'

import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/e916676cba.js" crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"></Script>
      <Script src="https://unpkg.com/three"></Script>
      {/* <Script src="script.js" defer></Script> */}


      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="images/logo3_noBg_thumbnail.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"/>
      </Head>
      <Navbar/>
      <div className="bg-black" style={{marginTop: "0px", height: "calc(100vh - 80px)", overflowY: "scroll"}}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
