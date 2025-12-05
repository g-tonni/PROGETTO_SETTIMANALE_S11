import { Carousel } from 'react-bootstrap'
import FirstCards from './FirstCards'
import img1 from '../assets/images/1a.png'
import img2 from '../assets/images/1b.png'
import img3 from '../assets/images/1c.png'

const CardsScroll = function () {
  return (
    <div className="d-block d-md-none">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <FirstCards
            des="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
            image={img1}
          />
        </Carousel.Item>
        <Carousel.Item>
          <FirstCards
            des="Ecco la nuova casa della musica latina"
            image={img2}
          />
        </Carousel.Item>
        <Carousel.Item>
          <FirstCards
            des="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
            image={img3}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CardsScroll
