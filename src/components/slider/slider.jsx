import {Carousel, CarouselImage, CarouselItem} from './slider.styled'
import 'react-multi-carousel/lib/styles.css';

const slider = [
  { image: '/images/slider/1.jpg' },
  { image: '/images/slider/2.jpg' }
]

const responsive = {
  tablet: {
    breakpoint: { max: 8000, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const options = {
  infinite: false,
  draggable: false,
  swipeable: false,
  autoplay: false,
  ssr: true,
  responsive
}

export const Slider = () => {
  return (
    <Carousel {...options}>
      {slider.map(({ image }, index) => (
        <CarouselItem key={index}>
          <CarouselImage src={image} alt={image} />
        </CarouselItem>
      ))}
    </Carousel>
  )
}
