import React, { Component } from 'react';
import {Route, Switch, withRouter} from "react-router-dom"
import { connect } from 'react-redux'
import { findUser, getSitters } from './thunk/userThunk'
import './App.css';
import Nav from "./Components/Nav"
import LoginForm from "./Components/LoginForm"
import SignUpForm from "./Components/SignUpForm"
import RequestForm from "./Components/RequestForm"
import SittersContainer from "./Containers/SittersContainer"
import HomePageB from "./Components/HomePageB"
import SitterPage from "./Components/SitterPage"
import RequestContainer from "./Containers/RequestContainer"
import Inbox from "./Containers/Inbox"
import MapContainer from "./Components/MapContainer"


class App extends Component {


  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.props.findUser(token)
    }
    if (this.props.user.first_name !== undefined) {
        this.props.getRequests(this.props.user)
    } else {
      this.props.getSitters()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.props.getSitters(this.props.user)
    }
  }



  render() {
    let sitters = this.props.sitters
    let user = this.props.user
    return (
      <div className="App">
        <Nav />
        <Switch>
            <Route
              path = '/login'
              render = {() => {
                return (
                    <LoginForm
                    />
                )}}
              />
              <Route
                path = '/signup'
                render = {() => {
                  return (
                    <SignUpForm />
                  )}}
              />
              <Route
                path = "/sitters/:id"
                render = {(routerProps) => {
                    let sitterID = routerProps.match.params.id
                    let sitter = sitters.find(sitter => {
                      return sitter.id.toString() === sitterID
                    })
                    return (
                      <SitterPage
                        sitter = {sitter}
                      />
                  )}}
              />

              <Route
                path = '/sitters'
                render = {() => {
                  return (
                      <div className = 'browse'>
                        <SittersContainer />
                        <div className = 'map'> <MapContainer /></div>
                      </div>
                          )}}
              />
              <Route
                path = '/requests'
                render = {() => {
                  return (
                    <RequestContainer

                     />
                  )
                }}
              />
              <Route
                path = '/inbox'
                render = {() => {
                  return (
                    <Inbox
                      user = {user}
                    />
                  )}}
              />
              <Route
                path = '/'
                render = {() => {
                  return (
                    <div className = 'homepage'>
                      <div className = 'image'> </div>
                      <div className = 'image-cover'> </div>
                      <h1 className = 'home-text'> We just are so good with plants </h1>
                      <h3 className ='home-sub'> (Seriously, just so good) </h3>
                      <RequestForm />
                      <HomePageB />
                    </div>
                  )}}
                />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    sitters: state.sitters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findUser: (token) => dispatch(findUser(token)),
    getSitters: (user) => dispatch(getSitters(user)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
