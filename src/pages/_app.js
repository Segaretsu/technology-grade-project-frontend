// import '../global.css'
import dynamic from "next/dynamic";
import Head from 'next/head'
import { APP_NAME } from '@constants/Constants'
import 'semantic-ui-css/semantic.min.css'
/** Estilos propios */
import '@styles/variables.css'
import '@styles/RegistroUsuario.css'
import '@styles/menuPublico.css'
import '@styles/editarCuenta.css'
import '@styles/menuPrivado.css'
import '@styles/nosotros.css'
import '@styles/informeConsumo.css'
import '@styles/graficas.css'
import '@styles/ListaHogares.css'

import { ToastProvider } from 'react-toast-notifications';

/**
 * Método que genera metricas importantes del proyecto
 * @param {*} metric 
 */
export function reportWebVitals (metric) {
  console.log(metric);
}

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <>
      <ToastProvider>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Una forma moderna e interactiva de administrar tu consumo en servicios públicos del agua y energía."
          />
          <meta name="keywords" content="servicios públicos, consumo de agua, consumo de energía, sensores"/>
          <meta name="author" content={APP_NAME} />
          <meta name="copyright" content={APP_NAME} />
          <title>{APP_NAME}</title>
        </Head>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  )
}

export default MyApp