import React from 'react'
import Request from "../Components/Request"
import { connect } from "react-redux"
import { getRequests} from "../thunk/requestThunk"



class RequestContainer extends React.Component {


  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user)
    this.props.getRequests(this.props.user)
  }

  requestArr = () => {
    let newArr = this.props.requests.map(claim => {
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
    return (
      <div className = "requestContainer">
        <div className ='requestCont-header'> Your Current Sittings </div>
        <div className = 'requests-box'>
          {this.requestArr()}
        </div>
      </div>
    )
  }
  }

  const mapStateToProps = state => {
    return {
      requests: state.requests,
      user: state.user
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getRequests: (user) => dispatch(getRequests(user))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(RequestContainer)
