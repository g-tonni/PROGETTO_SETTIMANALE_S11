import { configureStore } from '@reduxjs/toolkit'
import songsHomeReducer from '../reducers/songsHomeReducer'

const store = configureStore({
  reducer: songsHomeReducer,
})

export default store
