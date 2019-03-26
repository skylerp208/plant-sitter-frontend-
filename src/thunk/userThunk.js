import {login} from "../redux"
import {setSitters, setUser} from "../redux"

export const createAuth = (user) => {
  return function(dispatch) {
    fetch("http://localhost:3000/api/v1/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password
        }
      })
    })
    .then(resp => resp.json())
    .then(resp =>  {
        if (resp.hasOwnProperty('error')) {
          alert(resp.error)
        } else {
          localStorage.setItem("token", resp.jwt);
          dispatch(login(resp.user))
          window.location = "http://localhost:3001"

        }
      })
  }}



export const getSitters = (user) => {
    if (user !== undefined)
      {return function(dispatch) {
        fetch("http://localhost:3000/api/v1/users")
        .then(res => res.json())
        .then(res => {

          let newArr = res.filter(sitter => {
           return sitter.isSitter
         })
        dispatch(setSitters(newArr))
      })
    }} else {
      return function(dispatch) {
        fetch("http://localhost:3000/api/v1/users")
        .then(res => res.json())
        .then(res => {
          let  newArr = res.filter(sitter=> {
            return sitter.isSitter
          })
          dispatch(setSitters(newArr))
        })
      }
    }

  }

  export const findUser = (token) => {
      return dispatch => {
          return fetch('http://localhost:3000/api/v1/current_user', {
            headers: {
                'Content-type': 'application/json',
                Accepts: 'application/json',
                Authorization: token
              }
            }).then(res => res.json())
            .then(res => dispatch(setUser(res.user)))

      }
    }
