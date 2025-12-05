import logo from '../assets/logos/musicW.svg'
import { Form, InputGroup } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { GrHomeRounded } from 'react-icons/gr'
import { IoGridOutline } from 'react-icons/io5'
import { IoIosRadio } from 'react-icons/io'

const ColSx = function () {
  return (
    <div>
      <div className="text-light">
        <img
          src={logo}
          alt="Logo"
          className="my-4"
          style={{ width: '100px' }}
        />
      </div>
      <Form className="mb-4">
        <InputGroup>
          <InputGroup.Text className="bg-dark border-0">
            <FaSearch className="text-primary" />
          </InputGroup.Text>
          <Form.Control
            placeholder="Cerca..."
            className="border-0 bg-dark text-light"
          />
        </InputGroup>
      </Form>
      <button className="w-100 text-start btn-home text-light py-1 px-2 rounded-3">
        <GrHomeRounded className="text-primary fs-5" />
        <span className="m-0 ms-3">Home</span>
      </button>
      <button className="w-100 text-start btn-home text-light py-1 px-2 rounded-3">
        <IoGridOutline className="text-primary fs-5" />
        <span className="m-0 ms-3">Novità</span>
      </button>
      <button className="w-100 text-start btn-home text-light py-1 px-2 rounded-3">
        <IoIosRadio className="text-primary fs-5" />
        <span className="m-0 ms-3">Radio</span>
      </button>
    </div>
  )
}
export default ColSx
