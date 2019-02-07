import React from 'react'



class SitterCard  extends React.Component {

  handleclick = (sitter) => {
    window.location = `/sitters/${sitter.id}`
  }

  render () {
    return (
      <div className = 'sitter-card' onClick = {() => this.handleclick(this.props.sitter)}>
        <i className="user icon"></i>
        <div className = 'sitter-name'> {this.props.sitter.first_name} {this.props.sitter.last_name}</div>
        <div className = 'sitter-bio'> {this.props.sitter.bio} </div>
        <div className = 'sitter-address'> Address: {this.props.sitter.address} </div>
      </div>
    )
  }
}

export default SitterCard
