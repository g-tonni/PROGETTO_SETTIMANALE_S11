import { Col } from 'react-bootstrap'
import { MdArrowForwardIos } from 'react-icons/md'

const Explore = function ({ text }) {
  return (
    <Col xs={12} md={6} lg={4}>
      <div className="d-flex justify-content-between align-items-center py-4 px-4 my-1 bg-secondary rounded-4 shadow-sm text-primary">
        <p className="m-0 fs-5">{text}</p>
        <MdArrowForwardIos className="opacity-75" />
      </div>
    </Col>
  )
}

export default Explore
