const initialState = {
  user: {},
  sitters: [],
  requests: []
}


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGIN" :
      return {...state, user: action.payload}
    case "SET_USER" :
      return {...state, user: action.payload}
    case "LOGOUT" :
      return {...state, user: ''}
    case "SET_SITTERS" :
      return {...state, sitters: action.payload}
  default:
    return state
  }
}

export default reducer
