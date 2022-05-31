import { Typography } from '../components/typography/typography'
import { alertService } from '../services/alert.service'
import { Slider } from '../components/slider/slider'
import { Container } from '../assets/styles/base'
import {Products} from "../components/products/products";
import {productService} from "../services/product";
import {between, not} from "../utils";

function Home({ products }) {
  if (not(between(products.code, 200, 299))) {
    alertService.error(products.body?.message || 'Ops! Ocorreu um erro')
  }

  return (
    <>
      <Slider />

      <Container>

        <Typography>Últimos Lançamentos</Typography>

        <Products products={products.body?.data} />

        <button className="btn btn-success m-1" onClick={() => alertService.success('Success!!')}>Success</button>
        <button className="btn btn-danger m-1" onClick={() => alertService.error('Error :(')}>Error</button>
      </Container>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const products = await productService.findAll()

  return {
    props: {
      products
    },
  }
}

export default Home
