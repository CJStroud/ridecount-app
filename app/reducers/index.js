import { LOGIN, LOGOUT } from '../actions'

import initialState from '../state'

export const user = (state = initialState.user, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: 'cstroud',
        loggedin: true
      }
    case LOGOUT:
      return {
        ...state,
        username: null,
        loggedin: false
      }
  }
  return state
}
