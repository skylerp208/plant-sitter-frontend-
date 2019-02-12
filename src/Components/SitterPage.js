import React from "react"
import ContactPage from "./ContactPage"
import DayPicker from "react-day-picker";
import PlantPhotos from "./PlantPhotos"


class SitterPage extends React.Component {


    modifiers = {
      highlighted:  {
        daysOfWeek: [0 , 6]
      }
    }

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
        <style> {this.birthdayStyle} </style>
        <div className = 'availability'>
        <div className = "avail-header"> {this.props.sitter.first_name}'s Availability </div>
        <DayPicker className = 'calendar'modifiers= {this.modifiers}/>
        </div>

        <div className = 'about-cont'>
          <div className = 'about-header'> About {this.props.sitter.first_name} </div>
          <div className = 'about'> la la la la la la la la la la la </div>
        </div>
        <PlantPhotos
            user = {this.props.sitter}
         />
      </div>

    )} else {
      return <div> loading </div>
    }
  }


}


export default SitterPage
