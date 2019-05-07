import React from 'react'
<<<<<<< HEAD
import {connect} from 'react-redux'
import {createUser} from '../thunk/userThunk'
=======
>>>>>>> 9fe1cb073d9a42ce74dfbec0fdca00369eb7f671

class SignUpForm extends React.Component {

  state = {
    username: '',
<<<<<<< HEAD
    first_name: '',
    last_name: '',
    password: '',
    address: '',
    zip_code: '',
    state: ''
=======
    password: '',
    address: ''
>>>>>>> 9fe1cb073d9a42ce74dfbec0fdca00369eb7f671
  }

  changeHandler = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
  }

<<<<<<< HEAD
  submitHandler = (e) => {
    e.preventDefault()
    const userObj = this.state
    this.props.createUser(userObj)
  }

render () {
  return(
    <div className = 'signup-form-container'>
      <div className ='sign-in-text'> Sign Up for Plant Sitter </div>
      <form className = 'signup-form' onSubmit = {this.submitHandler}>
        <label htmlFor = 'username' className='label'> Username </label>
        <input type= 'text' id= 'username' name='username'  onChange = {this.changeHandler}/>
        <label htmlFor = 'first_name' className='first_name_label'> First Name</label>
        <label htmlFor = 'last_name' className='last_name_label'> Last Name </label>
        <input type= 'text' id= 'first_name' name='first_name'  onChange = {this.changeHandler}/>
        <input type= 'text' id= 'last_name' name='last_name'  onChange = {this.changeHandler}/>
        <label htmlFor='address' className='label'> Address </label>
        <input type= 'text' id = 'address' name='address' onChange = {this.changeHandler} />
        <label htmlFor = 'zip_code' className='zip_code_label'> Zip Code</label>
        <label htmlFor = 'city' className='city_label'>&nbsp; &nbsp;City</label>
        <label htmlFor = 'state' className='state_label'>State</label>
        <input type= 'text' id= 'zip_code' name='zip_code'  onChange = {this.changeHandler}/>
        <input type= 'text' id= 'city' name='city'  onChange = {this.changeHandler}/>
        <select name="state" id="state" onChange = {this.changeHandler}>
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AR">AR</option>
          <option value="AZ">AZ</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DC">DC</option>
          <option value="DE">DE</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="IA">IA</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="MA">MA</option>
          <option value="MD">MD</option>
          <option value="ME">ME</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MO">MO</option>
          <option value="MS">MS</option>
          <option value="MT">MT</option>
          <option value="NC">NC</option>
          <option value="NE">NE</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NV">NV</option>
          <option value="NY">NY</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WI">WI</option>
          <option value="WV">WV</option>
          <option value="WY">WY</option>
        </select>
        <label htmlFor ='password' className='label'> Password </label>
        <input type='password' id='password' name='password' onChange = {this.changeHandler}/>
=======
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
>>>>>>> 9fe1cb073d9a42ce74dfbec0fdca00369eb7f671
        <input type='submit' id="login-submit" value = 'Sign Up' />
      </form>
      <div className = 'terms'> By signing in or signing up, I agree to Plantsitter.com's Terms of Service and Privacy Policy, confirm that I am 18 years of age or older, and consent to receiving email communication.</div>
    </div>
  )
}




}

<<<<<<< HEAD
export default connect(null, {createUser})(SignUpForm)
=======
export default SignUpForm
>>>>>>> 9fe1cb073d9a42ce74dfbec0fdca00369eb7f671
