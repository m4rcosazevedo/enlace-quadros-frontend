import Link from 'next/link'
import { shuffle, sortNumber } from '../../utils'
import * as P from './product.styled'

const getImage = (uri) => {
  const URL_BASE_IMAGE = 'http://localhost:5004/storage/'
  return URL_BASE_IMAGE + uri
}

const colors = shuffle(['#16a085', '#e67e22', '#2980b9', '#9b59b6', '#34495e', '#7f8c8d'])

export const ProductItem = ({ product }) => {
  const cat = product.categories[0]
  const productUrl = `/${cat.slug}/${product.slug}`

  return (
    <P.ProductCard>
      <Link href={productUrl}>
        <a><P.ProductImage src={getImage(product.image)} alt={product.name} /></a>
      </Link>

      <P.ProductCategories>
        {product.categories.map((category, index) => (
          <Link href={`/${category.slug}`} key={category.slug}>
            <P.ProductCategory color={colors[index]}>
              {category.name}
            </P.ProductCategory>
          </Link>
        ))}
      </P.ProductCategories>

      <P.ProductTitle href={productUrl}>
        <a>{product.name}</a>
      </P.ProductTitle>

      <P.ProductDescription>{product.description}</P.ProductDescription>
    </P.ProductCard>
  )
}
