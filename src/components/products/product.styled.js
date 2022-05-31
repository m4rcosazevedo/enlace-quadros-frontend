import styled from 'styled-components'

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

export const ProductImage = styled.img`
  max-width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`

export const ProductCategories = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  display: inline-flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const ProductCategory = styled.a`
  background-color: ${({ color }) => color};
  color: #ffffff;
  font-size: .75rem;
  padding: 2px 7px;
  border-radius: 2px;

  &:hover {
    opacity: .8;
    text-decoration: none;
    color: #ffffff;
  }
`

export const ProductTitle = styled.a`
  font-weight: bold;
  font-size: .95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--dark);
`

export const ProductDescription = styled.div`
  font-size: .9rem;
  color: #909090;
`
