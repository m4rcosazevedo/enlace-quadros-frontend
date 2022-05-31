import Head from 'next/head'
import { Container } from '../../assets/styles/base'
import { Header } from '../header/header'
import { Nav } from '../nav/nav'

export const Layout = ({ children, categories }) => (
  <>
    <Head>
      <title>Enlace Quadros</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta  name="description" content="Fábrica de Quadros sob medida." />
    </Head>

    <Header />

    <Nav menus={categories.body?.data} />
    
    <main>{children}</main>

    <footer className="py-3 mt-3 bg-dark text-light text-center">
      <Container>
        <strong>&copy;2022 ENLACE QUADROS</strong> - Todos os direitos reservados
      </Container>
    </footer>
  </>
)
