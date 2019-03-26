import React from "react"
import {connect} from "react-redux"
import {getSitters, findUser} from "../thunk/userThunk"

import SitterCard from "../Components/SitterCard"



class SittersContainer extends React.Component {


    sitterArr = () => this.props.sitters.filter(sitter => {
        return sitter.id !== this.props.user.id
    })

    sitterList = () => this.props.sitters.map(sitter => {
      return (
        <SitterCard
          key = {sitter.id}
          sitter = {sitter}
        />
      )
    })

    filteredSitterList = () => this.sitterArr().map(sitter => {
      return (
          <SitterCard
            key = {sitter.id}
            sitter = {sitter}
          />
        )
      })

    render() {

      if (this.props.user !== undefined)
        {
          return (
            <div className='sittersContainer'>
                {this.filteredSitterList()}
            </div>
          )
        } else {
          return <div className='sittersContainer'> {this.sitterList()} </div>
        }
    }

  }


  const mapStateToProps = state => {
      return {
        user: state.user,
        sitters: state.sitters
      }
  }

export default connect(mapStateToProps, {getSitters, findUser})(SittersContainer)
