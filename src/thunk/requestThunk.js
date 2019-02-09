import { setInbox, setRequests, addRequest, removeRequest} from "../redux"


export const getRequests = (user) => {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/requests`)
      .then(res => res.json())
      .then(res => {
        let inbox = res.filter(request => request.status === 'pending' && request.owner.id === user.id)
        let requests = res.filter(request => request.status === 'accepted' && request.owner.id === user.id)
        dispatch(setInbox(inbox))
        dispatch(setRequests(requests))
      })
  }
}

export const acceptRequest = (request) => {
  return function(dispatch) {
  fetch(`http://localhost:3000/api/v1/requests/${request.id}`, {
    method: "PATCH",
    headers: {
      'Content-Type' : "application/json",
      Accepts: "application/json",
      "Authorization": localStorage.token
    },
    body: JSON.stringify({
      request: {
        status: 'accepted'
      }
    })
  })
  .then(res => res.json())
  .then(res => {
    dispatch(addRequest(res))

  })
}}

export const denyRequest = (request) => {
  return function(dispatch) {
      fetch(`http://localhost:3000/api/v1/requests/${request.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type' : "application/json",
        Accepts: "application/json",
        "Authorization": localStorage.token
      }
    }).then(res => {
      let id = res.url.split('/')[6]
      dispatch(removeRequest(id))
    })
    }
  }
