import React from "react"
import { connect } from "react-redux"
import { acceptRequest, denyRequest} from '../thunk/requestThunk'


class Request extends React.Component {

  handleAccept = (props) => {
      this.props.acceptRequest(props.request);
  }

  handleDeny = (props) => {
      this.props.denyRequest(props.request);
  }

  render() {
    // debugger
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

  const mapDispatchToProps = dispatch => {
    return {
      acceptRequest: (request) => dispatch(acceptRequest(request)),
      denyRequest: (request) => dispatch(denyRequest(request))
    }
  }

export default connect(null, mapDispatchToProps)(Request)
