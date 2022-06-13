import { Pagination } from '../../components/pagination/pagination'
import { Typography } from '../../components/typography/typography'
import { Products } from '../../components/products/products'
import { alertService } from '../../services/alert.service'
import { productService } from '../../services/product'
import { Container } from '../../assets/styles/base'
import { between, not } from '../../utils'

function Category({ categoryProducts }) {
  const { body, code } = categoryProducts

  if (not(between(code, 200, 299))) {
    const message = body?.message || 'Ops! Ocorreu um erro'
    alertService.error(message)

    return (
      <Container>
        <Typography>{message}</Typography>
      </Container>
    )
  }

  return (
    <Container>
      <Typography>{body.category?.name}</Typography>

      <Products products={body.data} category={body.category} />

      <Pagination meta={body.meta} url={`/${body.category?.slug}`} />
    </Container>
  )
}

export async function getServerSideProps({ req, res, query }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  const { category, page = 1 } = query

  const categoryProducts = await productService.findAll({ category, page })

  return {
    props: {
      categoryProducts
    },
  }
}

export default Category
