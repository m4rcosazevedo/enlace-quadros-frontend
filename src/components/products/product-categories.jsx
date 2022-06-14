import PC from './product-categories.styled'
import { shuffle } from '../../utils'
import NoSsr from '../no-ssr/no-ssr'
import Link from 'next/link'

const colors = shuffle(['#16a085', '#e67e22', '#2980b9', '#9b59b6', '#34495e', '#7f8c8d'])

export const ProductCategories = ({ categories = [], fixed = true }) => (
  <NoSsr>
    <PC.Categories fixed={fixed}>
      {categories.map((category, index) => (
        <Link href={`/${category.slug}`} key={category.slug}>
          <a><PC.Category color={colors[index]}>{category.name}</PC.Category></a>
        </Link>
      ))}
    </PC.Categories>
  </NoSsr>
)
