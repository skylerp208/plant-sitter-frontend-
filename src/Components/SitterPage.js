import React from "react"
import ContactPage from "./ContactPage"


class SitterPage extends React.Component {

  render () {
    if (this.props.sitter !== undefined ) {
    return (
      <div className = "sitter-page">
        <i className="user icon sitters-page"></i>
        <div className = 'sitter-page-card'>
          <div className = "name-header">
            {this.props.sitter.first_name} {this.props.sitter.last_name}
          </div>
          <div className = 'address-header'>
            {this.props.sitter.address}
          </div>
          <div className = "bio-header">
              {this.props.sitter.bio}
          </div>
        </div>
        <ContactPage
          sitter = {this.props.sitter}
          />
      </div>
    )} else {
      return <div> loading </div>
    }
  }


}


export default SitterPage
