import styled from 'styled-components'
import { Image } from '../image/image'

export const ProductCard = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 7px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }
`

export const ProductImage = styled(Image)`
  height: 280px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`

export const ProductTitle = styled.div`
  font-weight: bold;
  font-size: .95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &, &:hover {
    color: var(--dark);
  }
`

export const ProductDescription = styled.div`
  font-size: .9rem;
  color: #909090;
  min-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
