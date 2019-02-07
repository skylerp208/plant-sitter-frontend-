const initialState = {
  user: {},
  sitters: [],
  requests: [],
  inbox: []
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
    case "SET_REQUESTS" :
      return {...state, requests: action.payload}
    case "SET_INBOX" :
      return {...state, inbox: action.payload}
    case "ADD_REQUEST" :
      let newArr = state.inbox.filter(request => request.id !== action.payload.id)
      return {...state, inbox: newArr}
    case "REMOVE_REQUEST" :
      let arr = state.inbox.filter(request => request.id.toString() !== action.payload)
      return {...state, inbox: arr}
  default:
    return state
  }
}

export default reducer
