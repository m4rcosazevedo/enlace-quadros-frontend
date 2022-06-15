import {Carousel, CarouselImage, CarouselItem} from './slider.styled'
import 'react-multi-carousel/lib/styles.css';

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

export const Slider = ({ sliders }) => {
  return (
    <Carousel {...options} className="mb-3">
      {sliders.map((slide, index) => (
        <CarouselItem key={index}>
          <CarouselImage url={slide.image} custom="featured" />
        </CarouselItem>
      ))}
    </Carousel>
  )
}
