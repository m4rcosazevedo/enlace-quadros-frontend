import { BannerWhatsapp } from '../components/ui/banner-whatsapp/banner-whatsapp'
import { AlertError } from '../components/alert-error/alert-error'
import { Typography } from '../components/typography/typography'
import { Newsletter } from '../components/newsletter/newsletter'
import { Products } from '../components/products/products'
import { productService } from '../services/product'
import { Container } from '../assets/styles/base'
import { Head } from '../components/head/head'
import { between, not } from '../utils'
import { Col, Row } from 'reactstrap'

function Home({ products }) {
  if (not(between(products?.code, 200, 299))) {
    return <AlertError message={products?.body?.message || 'Ops! Ocorreu um erro'} />
  }

  return (
    <>
      <Head title="Enlace Quadros" description="Quadros personalizados e criados pensando em cada cliente" />

      <Typography>Últimos Lançamentos</Typography>
      <Products products={products.body?.data} itemsPerRow={3} />
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
