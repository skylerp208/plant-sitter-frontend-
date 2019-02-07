export const login = (userObj) => {
  return {type: "LOGIN" , payload: userObj }
}

export const logOut = () => {
  return {type: "LOGOUT"}
}

export const setUser = (user) => {
  return {type: "SET_USER", payload: user }
}

export const setSitters = (sitters) => {
  return {type: "SET_SITTERS", payload: sitters}
}


export const setRequests = (requests) => {
  return {type: "SET_REQUESTS", payload: requests}
}

export const setInbox = (inbox) => {
  return {type: "SET_INBOX", payload: inbox}
}

export const addRequest = (request) => {
  return {type: "ADD_REQUEST", payload: request}
}

export const removeRequest = (id) => {
  return {type: "REMOVE_REQUEST", payload: id}
}
