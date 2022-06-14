import App from 'next/app'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { ThemeProvider } from 'styled-components'
import { alertService } from '../services/alert.service'
import { categoryService } from '../services/category'
import { GlobalStyle } from '../assets/styles/global'
import { Layout } from '../components/layouts/layout'
import { Alert } from '../components/alert/alert'
import { between, not } from '../utils'

library.add(fab)

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps, categories }) {
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    if (not(between(categories.code, 200, 299))) {
      alertService.error(categories.body?.message || 'Ops! Ocorreu um erro')
    }

    return () => {
      mounted.current = false
    }
  }, [])

  return (
    <>
      <Head>
        <link href="https://netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
        <meta property="og:type" content="website" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout {...{categories}}>
          <Alert />
          <Component {...pageProps} {...{categories}} />
        </Layout>
      </ThemeProvider>
      <div id="modal-root" />
    </>
  )
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context)

  const categories = await categoryService.findAll()

  return {
    ...appProps,
    categories
  }
}

export default MyApp
