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
