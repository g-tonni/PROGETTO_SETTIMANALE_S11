import { IoMusicalNotes } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa'
import { IoPlayBack } from 'react-icons/io5'
import { IoPlayForward } from 'react-icons/io5'

const Player = function () {
  return (
    <div
      className="position-fixed bottom-0 d-flex justify-content-between align-items-center p-3 bg-secondary my-1 mx-3 rounded-4 play-shadow z-1 d-md-none"
      style={{ width: '94%' }}
    >
      <div className="border border-light bg-light bg-opacity-10 opacity-25 rounded-3 p-2">
        <IoMusicalNotes className="fs-4" />
      </div>

      <div>
        <FaPlay className="fs-3 me-4 opacity-50" />
        <IoPlayForward className="fs-2 opacity-50" />
      </div>
    </div>
  )
}

export default Player
