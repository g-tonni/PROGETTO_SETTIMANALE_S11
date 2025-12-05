import { GET_SONG } from '../actions'

const initialState = {
  song: null,
}

const songsHomeReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case GET_SONG:
      return {
        ...currentState,
        song: action.payload,
      }
    default: {
      return currentState
    }
  }
}

export default songsHomeReducer
