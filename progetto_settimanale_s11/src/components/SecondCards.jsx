import { Col } from 'react-bootstrap'

const SecondCards = function ({ title, artist, image }) {
  return (
    <Col xs={4} md={3} lg={2}>
      <div className="card-item d-flex flex-column h-100">
        <div className="overflow-hidden rounded-3 mb-2">
          <img src={image} alt="Foto" className="w-100" />
        </div>
        <p
          className="fs-6 text-truncate mb-0"
          style={{ lineHeight: '20px', fontSize: '1px' }}
        >
          {title}
        </p>
        <p className={'m-0 ' + (artist ? 'd-block' : 'd-none')}>{artist}</p>
      </div>
    </Col>
  )
}

export default SecondCards
