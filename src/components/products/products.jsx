import { Col, Row } from 'reactstrap'
import { ProductItem } from './product-item'

export const Products = ({ products = [] }) => {
  return (
    <Row>
      {products.map(product => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}
