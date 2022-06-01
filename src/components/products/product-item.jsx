import { createElement } from 'react'
import Link from 'next/link'
import { shuffle } from '../../utils'
import NoSsr from '../no-ssr/no-ssr'
import P, {
  ProductCard,
  ProductCategories,
  ProductCategory,
  ProductDescription,
  ProductImage,
  ProductTitle
} from "./product.styled";

const getImage = (uri) => {
  const URL_BASE_IMAGE = 'http://localhost:5004/storage/'
  return URL_BASE_IMAGE + uri
}

const colors = shuffle(['#16a085', '#e67e22', '#2980b9', '#9b59b6', '#34495e', '#7f8c8d'])

export const ProductItem = ({ product }) => {
  const cat = product.categories[0]
  const productUrl = `/${cat.slug}/${product.slug}`

  return (
    <NoSsr>
      <ProductCard>
        <Link href={productUrl}>
          <a><ProductImage src={getImage(product.image)} alt={product.name} /></a>
        </Link>

        <ProductCategories>
          {product.categories.map((category, index) => (
            <Link href={`/${category.slug}`} key={category.slug}>
              <a>
                <ProductCategory color={colors[index]}>{category.name}</ProductCategory>
              </a>
            </Link>
          ))}
        </ProductCategories>

        <Link href={productUrl}>
          <a><ProductTitle>{product.name}</ProductTitle></a>
        </Link>

        <ProductDescription>{product.description}</ProductDescription>
      </ProductCard>
    </NoSsr>
  )
}
