import { BannerWhatsapp } from '../ui/banner-whatsapp/banner-whatsapp'
import { Newsletter } from '../newsletter/newsletter'
import { Container } from '../../assets/styles/base'
import { Header } from '../header/header'
import { Slider } from '../slider/slider'
import { Col, Row } from 'reactstrap'
import { Nav } from '../nav/nav'
import Head from 'next/head'

export const Layout = ({ children, categories, sliders }) => (
  <>
    <Head>
      <title>Enlace Quadros</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta  name="description" content="Fábrica de Quadros sob medida." />
    </Head>

    <Header />

    <Nav menus={categories.body?.data} />
    <Slider sliders={sliders.body?.data} />

    <Container>
      <Row>
        <Col xs={12} sm={8} lg={9} className="mb-3">
          <main>
            {children}
          </main>
        </Col>
        <Col xs={12} sm={4} lg={3} className="mb-3">
          <aside>
            <BannerWhatsapp />
            <Newsletter />
          </aside>
        </Col>
      </Row>
    </Container>

    <footer className="py-3 mt-3 bg-dark text-light text-center">
      <Container>
        <strong>&copy;2022 ENLACE QUADROS</strong> - Todos os direitos reservados
      </Container>
    </footer>
  </>
)
