import React from 'react'

class SignUpForm extends React.Component {

  state = {
    username: '',
    password: '',
    address: ''
  }

  changeHandler = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
  }

render () {
  return(
    <div className = 'login-form-container'>
      <div className ='sign-in-text'> Sign Up for Plant Sitter </div>
      <form className = 'login-form' onSubmit = {this.submitHandler}>
        <label htmlFor = 'username' className='label'> Username </label>
        <input type= 'text' id= 'username' name='username'  onChange = {this.changeHandler}/>
        <label htmlFor ='password' className='label'> Password </label>
        <input type='password' id='password' name='password' onChange = {this.changeHandler}/>
        <label htmlFor='address' className='label'> Address </label>
        <input type= 'text' id = 'address' name='address' onChange = {this.changeHandler} />
        <input type='submit' id="login-submit" value = 'Sign Up' />
      </form>
      <div className = 'terms'> By signing in or signing up, I agree to Plantsitter.com's Terms of Service and Privacy Policy, confirm that I am 18 years of age or older, and consent to receiving email communication.</div>
    </div>
  )
}




}

export default SignUpForm
