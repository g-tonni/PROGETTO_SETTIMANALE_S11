import { IoMusicalNotes } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa'
import { IoPlayBack } from 'react-icons/io5'
import { IoPlayForward } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const Player = function () {
  const song = useSelector((currState) => {
    return currState.songs.song
  })

  return (
    <div
      className="position-fixed bottom-0 d-flex justify-content-between align-items-center p-3 bg-secondary my-1 mx-3 rounded-4 play-shadow z-1 d-lg-none"
      style={{ width: '94%' }}
    >
      {song ? (
        <div className="rounded-3 overflow-hidden me-3">
          <img src={song.album.cover_small} alt="Album" />
        </div>
      ) : (
        <div className="border border-light bg-light bg-opacity-10 opacity-25 rounded-3 p-2 me-3">
          <IoMusicalNotes className="fs-4" />
        </div>
      )}

      <div className="flex-grow-1">
        <p className="m-0 fw-bold">
          {song ? song.title : 'Seleziona un brano...'}
        </p>
        <p className="m-0" style={{ fontSize: '14px' }}>
          {song ? song.artist.name : ''}
        </p>
      </div>

      <div>
        <FaPlay className="fs-3 me-4 opacity-50" />
        <IoPlayForward className="fs-2 opacity-50" />
      </div>
    </div>
  )
}

export default Player
