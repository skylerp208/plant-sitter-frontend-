import React from 'react'
import Request from "../Components/Request"


class Inbox extends React.Component {

  requestArr = () => {
    if (this.props.user.first_name !== undefined ) {
      let array = this.props.user.claims.filter(claim => {
        return claim.status === 'pending'
    })
    let newArr = array.map(claim => {
      return(
        <Request
          key = {claim.id}
          request = {claim}
          />
      )
    })
    return newArr
  }}

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


export default Inbox
