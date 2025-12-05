import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getFavs, getSong } from '../redux/actions'
import { FaHeart } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'

const SecondCards = function ({ title, artist, image, songObj, heart }) {
  const dispatch = useDispatch()

  const favList = useSelector((currState) => {
    return currState.favSongs.favs
  })

  return (
    <Col xs={4} md={3} lg={2}>
      <div
        className="d-flex flex-column h-100"
        onClick={() => {
          dispatch(getSong(songObj))
        }}
      >
        <div className="overflow-hidden rounded-3 mb-2">
          <img src={image} alt="Foto" className="w-100" />
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <div className="w-75">
            <p
              className="fs-6 text-truncate mb-0"
              style={{ lineHeight: '20px', fontSize: '1px' }}
            >
              {title}
            </p>
            <p className={'m-0 ' + (artist ? 'd-block' : 'd-none')}>{artist}</p>
          </div>
          {heart === 'Si' && (
            <button
              className="bg-transparent border-0 text-light p-0"
              onClick={() => {
                dispatch(getFavs(songObj))
              }}
            >
              <FaRegHeart className="fs-5 me-1" />
            </button>
          )}
        </div>
      </div>
    </Col>
  )
}

export default SecondCards
