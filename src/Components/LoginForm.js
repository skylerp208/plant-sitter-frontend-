import React from 'react'
import {connect} from 'react-redux'
import {createAuth} from '../thunk/userThunk'

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  changeHandler = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
  }

  submitHandler = (e) => {
    e.preventDefault()
    const userObj = this.state
    this.props.createAuth(userObj)
  }

render () {
  return(
    <div className = 'login-form-container'>
      <div className ='sign-in-text'> Sign In to Plant Sitter </div>
      <form className = 'login-form' onSubmit = {this.submitHandler}>
        <label htmlFor = 'username' className='label'> Username </label>
        <input type= 'text' id= 'username' name='username'  onChange = {this.changeHandler}/>
        <label htmlFor ='password' className='label'> Password </label>
        <input type='password' id='password' name='password' onChange = {this.changeHandler}/>
        <input type='submit' id="login-submit" value = 'Sign In' />
      </form>
      <div className = 'terms'> By signing in or signing up, I agree to Plantsitter.com's Terms of Service and Privacy Policy, confirm that I am 18 years of age or older, and consent to receiving email communication.</div>
    </div>
    )
  }

}

export default connect(null, {createAuth})(LoginForm);
