import { Col, Row } from 'reactstrap'
import { ProductItem } from './product-item'

export const Products = ({ products = [], itemsPerRow = 3, category = null }) => {
  return (
    <Row>
      {products.map(product => (
        <Col key={(product.id).toString()} xs={12} sm={6} md={4} lg={12 / itemsPerRow} className="mb-3">
          <ProductItem product={product} category={category} />
        </Col>
      ))}
    </Row>
  )
}
