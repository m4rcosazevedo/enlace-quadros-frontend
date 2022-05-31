import { Tag } from './typography.styled'

export const Typography = (props) => {
  const { tag = 'h1', variant = 'h1', children, align = 'center' } = props

  return (
    <Tag className={variant} align={align} tag={tag}>{children}</Tag>
  )
}
