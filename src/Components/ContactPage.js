import React from 'react'
import { connect } from 'react-redux'
import DayPicker from "react-day-picker"
import 'react-day-picker/lib/style.css';

class ContactPage extends React.Component {


  state = {
    message: '',
    selectedDay : undefined
  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleDayClick = (e) => {
    console.log('clicked!');
    debugger
  }



  handleSend = (props, state) => {
    fetch("http://localhost:3000/api/v1/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        'Authorization': localStorage.token
      },
      body: JSON.stringify({
        request: {
          message: state.message,
          sitter_id: props.sitter.id,
          owner_id: props.user.id,
          status: "pending"
        }
      })
    })
    .then()
  }

  render () {
    let props = this.props
    let state = this.state
    if (this.props.sitter !== undefined ) {
      return (
        <div className = 'contact-page'>
          <label className = 'message-label' htmlFor = 'message'> Send a request</label>
          <textarea className = 'message-input' name = 'message' onChange = {this.changeHandler} value = {this.state.message}> </textarea>
          <button className = 'send-button' onClick = {() => this.handleSend(props, state)}> Send </button>
          <DayPicker onDayClick = {this.handleDayClick}/>
        </div>
      )
    } else {
      return <div> loading </div>
    }

  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(ContactPage)
