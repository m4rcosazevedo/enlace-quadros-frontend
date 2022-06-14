import styled, { css } from 'styled-components'

const Categories = styled.div`
  flex-wrap: wrap;
  gap: 5px;
  left: 15px;
  flex-direction: row-reverse;

  ${({ fixed }) => fixed ? css`
    display: inline-flex;
    position: absolute;
    top: 15px;
    right: 15px;
  ` : css`
    display: flex;
    margin-bottom: 2rem;
  `}
`

const Category = styled.div`
  background-color: ${({ color }) => color};
  color: #ffffff;
  font-size: .75rem;
  padding: 2px 7px;
  border-radius: 2px;

  &:hover {
    opacity: .9;
    text-decoration: none;
    color: #ffffff;
  }
`

export default {
  Categories,
  Category,
}
