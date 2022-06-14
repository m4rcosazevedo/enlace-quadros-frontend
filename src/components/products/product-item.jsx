import { ProductCard, ProductDescription, ProductImage, ProductTitle } from './product.styled'
import { ProductCategories } from './product-categories'
import { HTML } from '../html/html'
import Link from 'next/link'

export const ProductItem = ({ product, category = null }) => {
  const cat = category
    ? product.categories.find( item => item.id === category.id)
    : product.categories[0]

  const productUrl = `/${cat?.slug}/${product.slug}`

  return (
    <ProductCard>
      <Link href={productUrl}>
        <a><ProductImage url={product.image.url} thumbnail /></a>
      </Link>

      <ProductCategories categories={product.categories} />

      <Link href={productUrl}>
        <a><ProductTitle>{product.name}</ProductTitle></a>
      </Link>

      <ProductDescription><HTML>{product.description}</HTML></ProductDescription>
    </ProductCard>
  )
}
