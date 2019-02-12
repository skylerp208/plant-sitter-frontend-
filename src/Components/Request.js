import React from "react"
import { connect } from "react-redux"
import { acceptRequest, denyRequest} from '../thunk/requestThunk'
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css'


class Request extends React.Component {

  handleAccept = (props) => {
      this.props.acceptRequest(props.request);
  }

  handleDeny = (props) => {
      this.props.denyRequest(props.request);
  }

  render() {

      const modifiers = {
        highlighted: {
            from: new Date(this.props.request.start_date),
            to: new Date(this.props.request.end_date)
          }
      }

    if (this.props.request.status === 'accepted')
    {return (
      <div className = 'accepted-request'>
        <div className = 'request-owner'> {this.props.request.sitter.first_name}</div>
        <div className = 'request-message'> {this.props.request.message} </div>
        <DayPicker className = 'request-calendar' modifiers = {modifiers}/>
      </div>
    )} else {
      return (
        <div className = 'pending-request'>
          <div className = 'request-owner'> {this.props.request.sitter.first_name}</div>
          <div className = 'request-message'> {this.props.request.message} </div>
          <button className = 'accept-button' onClick = {() => this.handleAccept(this.props)}> Accept </button>
          <button className = 'deny-button' onClick = {() => this.handleDeny(this.props)}> Deny </button>
            <DayPicker className = 'request-calendar' modifiers = {modifiers} />
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
