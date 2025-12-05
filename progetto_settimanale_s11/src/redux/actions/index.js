export const GET_SONG = 'GET_SONG'
export const GET_FAVS = 'GET_FAVS'
export const REMOVE_FAVS = 'GET_FAVS'

export const getSong = function (_payload) {
  return {
    type: GET_SONG,
    payload: _payload,
  }
}

export const getFavs = function (_payload) {
  return {
    type: GET_FAVS,
    payload: _payload,
  }
}

export const removeFavs = function (_payload) {
  return {
    type: REMOVE_FAVS,
    payload: _payload,
  }
}
