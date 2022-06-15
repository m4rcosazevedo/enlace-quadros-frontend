import ReactMultiCarousel from 'react-multi-carousel'
import styled from 'styled-components'
import { Image } from '../image/image'

export const Carousel = styled(ReactMultiCarousel)``

export const CarouselItem = styled.div`
  text-align: center;
`

export const CarouselImage = styled(Image).attrs({ draggable: false })`
  width: 100%;
  max-width: 100%;
  height: 450px;
  position: relative;
  object-fit: cover;
`

