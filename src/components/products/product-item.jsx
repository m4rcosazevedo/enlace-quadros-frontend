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

const colors = shuffle(['#16a085', '#e67e22', '#2980b9', '#9b59b6', '#34495e', '#7f8c8d'])

export const ProductItem = ({ product, category = null }) => {
  const cat = category
    ? product.categories.find( item => item.id === category.id)
    : product.categories[0]

  const productUrl = `/${cat?.slug}/${product.slug}`

  return (
    <NoSsr>
      <ProductCard>
        <Link href={productUrl}>
          <a><ProductImage src={product.image.url} alt={product.image.filename} /></a>
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
