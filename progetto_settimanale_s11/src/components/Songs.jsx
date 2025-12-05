import { useEffect, useState } from 'react'
import SecondCards from './SecondCards'

const baseURL = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='

const Songs = function ({ search }) {
  const [songs, setSongs] = useState(null)

  const getSongs = function () {
    fetch(baseURL + search)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE ', res.status)
        }
      })
      .then((data) => {
        console.log(data)
        setSongs(data.data.slice(0, 6))
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }
  useEffect(() => {
    getSongs(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {songs &&
        songs.map((song) => {
          return (
            <SecondCards
              key={song.id}
              title={song.title}
              artist={song.artist.name}
              image={song.album.cover_medium}
            />
          )
        })}
    </>
  )
}

export default Songs
