import './assets/style.scss'
import { Provider } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { MdArrowForwardIos } from 'react-icons/md'
import store from './redux/store'
import NavMobile from './components/NavMobile'
import CardsScroll from './components/CardsScroll'
import CardsScroll2 from './components/CardScroll2'
import Songs from './components/Songs'
import Explore from './components/Explore'
import Footer from './components/Footer'
import CardsScrollDesk from './components/CardsScrollDesk'
import CardsScrollDesk2 from './components/CardsScrollDesk2'
import ColSx from './components/ColSx'
import Player from './components/Player'
import PlayerDesk from './components/PlayerDesk'

function App() {
  return (
    <Provider store={store}>
      <Player />
      <NavMobile />
      <Container fluid>
        <Row>
          <Col
            xs={0}
            md={2}
            className="bg-secondary border-end border-1 border-col d-none d-md-block"
          >
            <ColSx />
          </Col>
          <Col xs={12} md={10} className="p-md-0">
            <PlayerDesk />
            <div className="px-md-5">
              <h1 className="mt-5">Novità</h1>
              <hr />
              <Row className="my-4">
                <Col xs={12}>
                  <CardsScroll />
                  <CardsScrollDesk />
                </Col>
              </Row>
              <Row className="my-4">
                <p className="fw-bold fs-5 d-flex align-items-center mb-1 mt-4">
                  <span className="me-2">Nuovi episodi radio</span>
                  <MdArrowForwardIos className="opacity-75" />
                </p>
                <Col xs={12}>
                  <CardsScroll2 />
                  <CardsScrollDesk2 />
                </Col>
              </Row>
              <Row className="g-2 my-4">
                <p className="fw-bold fs-5 d-flex align-items-center mb-1 mt-4">
                  <span className="me-2">Nuove uscite</span>
                  <MdArrowForwardIos className="opacity-75" />
                </p>
                <Songs search="queen" />
              </Row>
              <Row className="g-2 my-4">
                <p className="fw-bold fs-5 d-flex align-items-center mb-1 mt-4">
                  <span className="me-2">Nuove uscite</span>
                  <MdArrowForwardIos className="opacity-75" />
                </p>
                <Songs search="eminem" />
              </Row>
              <Row className="g-2 my-4">
                <p className="fw-bold fs-5 d-flex align-items-center mb-1 mt-4">
                  Altro da esplorare
                </p>
                <Explore text="Esplora per genere" />
                <Explore text="Decenni" />
                <Explore text="Attività e stati d'animo" />
                <Explore text="Worldwide" />
                <Explore text="Classifiche" />
                <Explore text="Audio spaziale" />
                <Explore text="Video musicali" />
                <Explore text="Nuovi artisti" />
                <Explore text="Hit del passato" />
              </Row>
              <Row className="bg-light bg-opacity-10 mt-5">
                <Footer />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Provider>
  )
}

export default App
