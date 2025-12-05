import { Carousel, Container, Row, Col } from 'react-bootstrap'
import FirstCards from './FirstCards'
import img1 from '../assets/images/1a.png'
import img2 from '../assets/images/1b.png'
import img3 from '../assets/images/1c.png'

const CardsScrollDesk = function () {
  return (
    <Container fluid className="d-none d-md-block p-0">
      <Carousel indicators={false} interval={null}>
        <Carousel.Item>
          <Row>
            <Col xs={6}>
              <FirstCards
                des="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
                image={img1}
              />
            </Col>
            <Col xs={6}>
              <FirstCards
                des="Ecco la nuova casa della musica latina"
                image={img2}
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs={6}>
              <FirstCards
                des="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
                image={img3}
              />
            </Col>
            <Col xs={6}>
              <FirstCards
                des="Ecco la nuova casa della musica latina"
                image={img2}
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default CardsScrollDesk
