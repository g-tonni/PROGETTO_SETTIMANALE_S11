import { Container, Carousel, Row, Col } from 'react-bootstrap'
import SecondCards from './SecondCards'
import img1 from '../assets/images/2a.png'
import img2 from '../assets/images/2b.png'
import img3 from '../assets/images/2c.png'
import img4 from '../assets/images/2d.png'
import img5 from '../assets/images/2e.png'
import img6 from '../assets/images/2f.png'

const CardsScroll2 = function () {
  return (
    <Container fluid className="p-0 d-block d-md-none">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <Row className="g-2">
            <SecondCards title="Prólogo con Abuelo" image={img1} />

            <SecondCards title="The Wanderer" image={img2} />

            <SecondCards title="Michael Bublé & Carly Pearce" image={img3} />
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="g-2">
            <SecondCards title="Stephan Moccio: The Zane Lowe" image={img4} />

            <SecondCards title="Chart Spotlight: Julia Michaels" image={img5} />

            <SecondCards title="Prólogo con Abuelo" image={img6} />
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default CardsScroll2
