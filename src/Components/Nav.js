import React from "react"
import {connect} from 'react-redux'
import {logOut} from "../redux"



class Nav extends React.Component {


  state = {
    usertoggled: false
  }

  hidden = {
    display: 'none'
  }

  shown = {
    display: 'grid'
  }

  toggle = () => {
    this.setState({
      usertoggled: !this.state.usertoggled
    })
  }

  handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    this.props.logOut()
    window.location = "http://localhost:3001"
  }

  render() {
    if (this.props.user.first_name !== undefined) {
      return (
        <div className = "nav">
          <a className = 'logo' href= '/'>PLANT SITTER </a>
          <a href= '/sitters' className='sitters-link'> Browse Sitters </a>
          <button  className = 'profile-link' onClick = {this.toggle}> {this.props.user.first_name} <i className="angle down icon"></i></button>
          <div className = "profile-dropdown" style = {this.state.usertoggled ? this.shown : this.hidden}>
            <a className = 'inbox' href = '/inbox'>inbox</a>
            <a className = 'requests' href = '/requests'>requests</a>
          </div>
          <a href= '/logout' className = "log-out" onClick = {this.handleLogOut}>Sign Out</a>
        </div>
      )
    } else {
    return (
      <div className = "nav">
        <a className = 'logo' href= '/'> PLANT SITTER </a>
        <a href= '/sitters' className='sitters-link'> Browse Sitters </a>
        <a href= '/login' className = "login">Sign In</a>
        <a href= '/signup' className = "signup">Sign up</a>
      </div>
    )}
  }
}

const mapStateToProps = (state) => {
  return {
      user : state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
