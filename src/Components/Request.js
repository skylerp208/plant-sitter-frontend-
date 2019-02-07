import React from "react"


class Request extends React.Component {

  handleAccept = (props) => {
    fetch(`http://localhost:3000/api/v1/requests/${props.request.id}`, {
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
  }

  handleDeny = (props) => {
    fetch(`http://localhost:3000/api/v1/requests/${props.request.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type' : "application/json",
        Accepts: "application/json",
        "Authorization": localStorage.token
      }
    })
  }

  render() {
    if (this.props.request.status === 'accepted')
    {return (
      <div className = 'request'>
        <div className = 'request-message'> {this.props.request.message} </div>
        <div className = 'request-owner'> {this.props.request.owner}</div>
        <div className = 'request-start'> {this.props.request.start_date}</div>
        <div className = 'request-end'> {this.props.request.end_date}</div>
      </div>
    )} else {
      return (
        <div className = 'request'>
          <div className = 'request-message'> {this.props.request.message} </div>
          <div className = 'request-owner'> {this.props.request.owner}</div>
          <div className = 'request-start'> {this.props.request.start_date}</div>
          <div className = 'request-end'> {this.props.request.end_date}</div>
          <button className = 'accept-button' onClick = {() => this.handleAccept(this.props)}> Accept </button>
          <button className = 'deny-button' onClick = {() => this.handleDeny(this.props)}> Deny </button>
        </div>
      )
    }
  }

  }

export default Request
