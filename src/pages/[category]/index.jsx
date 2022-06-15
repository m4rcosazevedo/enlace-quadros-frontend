import { AlertError } from '../../components/alert-error/alert-error'
import { Pagination } from '../../components/pagination/pagination'
import { Typography } from '../../components/typography/typography'
import { Products } from '../../components/products/products'
import { productService } from '../../services/product'
import { between, not } from '../../utils'
import {Head} from "../../components/head/head";

function Category({ categoryProducts }) {
  const { body, code } = categoryProducts

  if (not(between(code, 200, 299))) {
    return <AlertError message={body?.message || 'Ops! Ocorreu um erro'} />
  }

  return (
    <>
      <Head title={body.category?.name} description={`Fique por dentros da nossa categoria: ${body.category?.name}`} />
      <Typography>{body.category?.name}</Typography>

      <Products products={body.data} category={body.category} />

      <Pagination meta={body.meta} url={`/${body.category?.slug}`} />
    </>
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
