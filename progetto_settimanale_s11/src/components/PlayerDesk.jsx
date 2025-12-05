import { IoMusicalNotes } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa'
import { IoPlayBack } from 'react-icons/io5'
import { IoPlayForward } from 'react-icons/io5'
import { FaRandom } from 'react-icons/fa'
import { VscDebugRestart } from 'react-icons/vsc'
import { MdAccountCircle } from 'react-icons/md'
import { Form } from 'react-bootstrap'
import { IoVolumeHigh } from 'react-icons/io5'

const PlayerDesk = function () {
  return (
    <div className="position-sticky top-0 d-none d-md-flex justify-content-between align-items-center p-3 px-5 bg-secondary shadow z-1">
      <div>
        <FaRandom className="fs-6 opacity-50 me-2" />
        <IoPlayBack className="fs-4 opacity-50 me-2" />
        <FaPlay className="fs-3 me-2 opacity-75" />
        <IoPlayForward className="fs-4 opacity-50 me-2" />
        <VscDebugRestart className="fs-6 opacity-50" />
      </div>
      <div className="d-flex align-items-center">
        <div className="border border-light bg-light bg-opacity-10 opacity-25 rounded-3 p-2 me-3">
          <IoMusicalNotes className="fs-4" />
        </div>
        <p className="m-0">Seleziona un brano...</p>
      </div>
      <div className="d-flex align-items-center">
        <IoVolumeHigh className="fs-4 opacity-50 me-2" />
        <Form.Range />
      </div>
      <div>
        <button className="btn btn-danger d-flex align-items-center text-light">
          <MdAccountCircle className="me-2 fs-5" />
          Accedi
        </button>
      </div>
    </div>
  )
}

export default PlayerDesk
