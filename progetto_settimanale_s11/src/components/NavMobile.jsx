import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { HiMenuAlt4 } from 'react-icons/hi'
import logo from '../assets/logos/musicW.svg'

function NavMobile() {
  return (
    <Navbar
      expand="lg"
      bg="secondary"
      data-bs-theme="secondary"
      className="d-block d-lg-none"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0">
          <HiMenuAlt4 size={28} className="text-primary" />
        </Navbar.Toggle>
        <Navbar.Brand href="#" className="text-light">
          <img src={logo} alt="logo" style={{ width: '80px' }} />
        </Navbar.Brand>
        <div className="text-primary">Accedi</div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light">
              Novità
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light">
              Radio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMobile
