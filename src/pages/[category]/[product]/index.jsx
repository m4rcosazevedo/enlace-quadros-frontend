import { ButtonWhatsapp } from '../../../components/ui/button-whatsapp/button-whatsapp'
import { ProductCategories } from '../../../components/products/product-categories'
import ProductShow from '../../../components/product-show/product-show.styled'
import { AlertError } from '../../../components/alert-error/alert-error'
import { Typography } from '../../../components/typography/typography'
import { Products } from '../../../components/products/products'
import { productService } from '../../../services/product'
import { HTML } from '../../../components/html/html'
import { Head } from '../../../components/head/head'
import {between, not} from '../../../utils'
import { Row, Col } from 'reactstrap'

function ProductDetails ({ productDetail, relatedProducts }) {
  const { body, code } = productDetail

  if (not(between(code, 200, 299))) {
    return <AlertError message={body?.message || 'Ops! Ocorreu um erro'} />
  }

  const product = body.data;

  return (
    <>
      <Head title={product.name} description={product.description} />

      <Typography>Detalhes do produto</Typography>

      <Row className="mb-3">
        <Col xs={12} lg={5}>
          <ProductShow.Image url={product.image.url} />
        </Col>
        <Col xs={12} lg={7}>
          <ProductShow.Title>{product.name}</ProductShow.Title>

          <ProductCategories categories={product.categories} fixed={false}/>

          <div className="text-right">
            <ButtonWhatsapp />
          </div>
        </Col>
      </Row>

      {product.description && <ProductShow.Description><HTML>{product.description}</HTML></ProductShow.Description>}

      <Typography>Produtos Relacionados</Typography>

      {relatedProducts?.code === 200 && <Products products={relatedProducts.body?.data.filter(item => item.id !== product.id )} />}
    </>
  )
}

export default ProductDetails

export async function getServerSideProps({ req, res, query }) {
  const { category, product } = query

  const productDetail = await productService.find(category, product)
  const relatedProducts = await productService.findAll({ limit: 9, category })

  return {
    props: {
      productDetail,
      relatedProducts
    }
  }
}
