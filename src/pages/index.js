import { AlertError } from '../components/alert-error/alert-error'
import { Typography } from '../components/typography/typography'
import { Products } from '../components/products/products'
import { productService } from '../services/product'
import { Head } from '../components/head/head'
import { between, not } from '../utils'

function Home({ products, mostViewedProducts }) {
  if (not(between(products?.code, 200, 299))) {
    return <AlertError message={products?.body?.message || 'Ops! Ocorreu um erro'} />
  }

  return (
    <>
      <Head title="Enlace Quadros" description="Quadros personalizados e criados pensando em cada cliente" />

      <Typography>Últimos Lançamentos</Typography>
      <Products products={products.body?.data} itemsPerRow={3} />

      <Typography>Mais vistos</Typography>
      <Products products={mostViewedProducts.body?.data} itemsPerRow={3} />
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const products = await productService.findAll({ limit: 6 })
  const mostViewedProducts = await productService.findAll({ limit: 6, view: true })

  return {
    props: {
      products,
      mostViewedProducts
    },
  }
}

export default Home
