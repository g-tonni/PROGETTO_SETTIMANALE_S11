import { GET_SONGS } from '../actions'

const initialState = {
  songs: [],
}

const songsHomeReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...currentState,
        songs: action.payload,
      }
    default: {
      return currentState
    }
  }
}

export default songsHomeReducer
