import { Image as CImage } from '../image/image'
import styled from 'styled-components'

const Image = styled(CImage)`
  background: #fff;
  padding: 10px;
  width: 100%;
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
`

const Title = styled.h1`
  font-weight: bold;
  text-align: right;
`

const Description = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 15px;
  color: #909090;
  border-radius: 4px;
  margin-bottom: 3rem;
`

export default {
  Image,
  Title,
  Description
}
