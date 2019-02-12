import React from 'react'
import { connect } from 'react-redux'
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';

class ContactPage extends React.Component {


  state = {
    message: '',
    startDate : undefined,
    endDate : undefined
  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleDayChangeA = (date) => {
   this.setState({
     startDate: date
   })
 }
 handleDayChangeB = (date) => {
    this.setState({
      endDate: date
    })
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
          sitter_id: props.user.id,
          owner_id: props.sitter.id,
          start_date: this.state.startDate,
          end_date: this.state.endDate,
          status: "pending"
        }
      })
    })
    .then(alert("Your request has been sent!"))
    .then(  this.setState({
        message : ''
      }))
  }

  render () {
    let props = this.props
    let state = this.state
    if (this.props.sitter !== undefined ) {
      return (
        <div className = 'contact-page'>
          <label className = 'message-label' htmlFor = 'message'> Book {this.props.sitter.first_name}</label>
          <textarea className = 'message-input' name = 'message' onChange = {this.changeHandler} value = {this.state.message}> </textarea>
          <button className = 'send-button' onClick = {() => this.handleSend(props, state)}> Send </button>
          <div className = 'dates'> Select dates </div>
          <DayPickerInput className = 'picker-a' onDayChange = {this.handleDayChangeA}/>
          to
          <DayPickerInput className = 'picker-b' onDayChange = {this.handleDayChangeB}/>
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
