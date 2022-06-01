import { Typography } from '../components/typography/typography'
import { alertService } from '../services/alert.service'
import { Slider } from '../components/slider/slider'
import { Container } from '../assets/styles/base'
import {Products} from "../components/products/products";
import {productService} from "../services/product";
import {between, not} from "../utils";
import {Col, Row} from "reactstrap";
import {Newsletter} from "../components/newsletter/newsletter";

function Home({ products }) {
  if (not(between(products.code, 200, 299))) {
    alertService.error(products.body?.message || 'Ops! Ocorreu um erro')
  }

  return (
    <>
      <Slider />

      <Container>

        <Typography>Últimos Lançamentos</Typography>

        <Row>
          <Col xs={12} sm={8} lg={9} className="mb-3">
            <Products products={products.body?.data} itemsPerRow={3} />
          </Col>
          <Col xs={12} sm={4} lg={3} className="mb-3">
            <Newsletter />
          </Col>
        </Row>

      </Container>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const products = await productService.findAll({ limit: 9 })

  return {
    props: {
      products
    },
  }
}

export default Home
