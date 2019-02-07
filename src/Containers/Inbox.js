import React from 'react'
import Request from "../Components/Request"
import { connect } from "react-redux"
import { getRequests} from "../thunk/requestThunk"


class Inbox extends React.Component {


  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user)
    this.props.getRequests(this.props.user)
  }


  requestArr = () => {
    let newArr = this.props.inbox.map(claim => {
      return(
        <Request
          key = {claim.id}
          request = {claim}
          />
      )
    })
    return newArr
  }

  render() {
    return(
        <div className = "requestContainer">
          <div className = 'requestCont-header'> Pending Requests </div>
          <div className = 'requests-box' >
            {this.requestArr()}
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inbox: state.inbox,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  // denyRequest: (request) => dispatch(denyRequest(request)),
  getRequests: (requests) => dispatch(getRequests(requests))
  }
}



export default connect(mapStateToProps, mapDispatchToProps) (Inbox)
