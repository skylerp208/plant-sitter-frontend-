import React from "react"
import PlantPhoto from "./PlantPhoto"


class PlantPhotos extends React.Component {

  state = {
    photo_upload: null,
    photos: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`)
    .then(res => res.json())
    .then(res => {
      let newArr = res.urls
      this.setState({
        photos: newArr
      })
  })
  }

    photoList = () => {
      let newArr = this.state.photos.map( photo => {
        return (
          <PlantPhoto
            key = {photo}
            url = {photo}
           />
          )}
        )
        return newArr
      }

   changeHandler = (e) => {
     this.setState({
       photo_upload: e.target.files[0]
     })
     }

  submitHandler = (e, props) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append("photo", this.state.photo_upload)
    fetch( `http://localhost:3000/api/v1/users/${props.user.id}`, {
      method: "PATCH",
      body: formData
    })

  }

  render () {
    return (
        <div className = 'plant-photos'>
        <form onSubmit={(e) => this.submitHandler(e, this.props)} className = 'upload-form'>
          <input type='file' name='imageupload' onChange = {this.changeHandler} />
          <input type='submit' value = "Upload"/>
        </form>
          {this.photoList()}
        </div>

    )
  }
}



export default PlantPhotos
