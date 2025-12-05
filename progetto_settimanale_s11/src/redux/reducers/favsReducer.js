import { GET_FAVS } from '../actions'
import { REMOVE_FAVS } from '../actions'

const initialState = {
  favs: [],
}

const songsHomeReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case GET_FAVS:
      return {
        ...currentState,
        favs: [...currentState.favs, action.payload],
      }
    case REMOVE_FAVS:
      return {
        ...currentState,
        favs: currentState.favs.filter((song) => song.id !== action.payload),
      }
    default: {
      return currentState
    }
  }
}

export default songsHomeReducer
