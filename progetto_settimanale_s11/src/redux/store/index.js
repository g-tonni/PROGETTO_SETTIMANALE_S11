import { configureStore } from '@reduxjs/toolkit'
import songsHomeReducer from '../reducers/songsHomeReducer'
import favsReducer from '../reducers/favsReducer'

const store = configureStore({
  reducer: {
    songs: songsHomeReducer,
    favSongs: favsReducer,
  },
})

export default store
