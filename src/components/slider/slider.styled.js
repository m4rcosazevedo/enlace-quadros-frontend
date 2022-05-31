import styled from 'styled-components'
import ReactMultiCarousel from 'react-multi-carousel'

export const Carousel = styled(ReactMultiCarousel)``

export const CarouselItem = styled.div``

export const CarouselImage = styled.img.attrs({ draggable: false })`
  width: 100%;
  max-width: 100%;
  height: 450px;
  position: relative;
  object-fit: cover;
`

