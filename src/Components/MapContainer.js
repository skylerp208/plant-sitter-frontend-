import React from 'react'
import {connect} from "react-redux"

class MapContainer extends React.Component {

  state = {
    coordinates: []
  }

  initMap = () => {
    if (this.props.user.id !== undefined) {
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: JSON.parse(this.props.user.coordinates),
          zoom: 11
        })
        this.props.sitters.forEach((sitter) => {
          if (sitter.id !== this.props.user.id) {
            let content = `<div> ${sitter.first_name}</div>`
            let info = new window.google.maps.InfoWindow({
              content: content
            })
            let marker =  new window.google.maps.Marker({
                position: JSON.parse(sitter.coordinates) ,
                map: map
              })
            info.open(map, marker)
          }})
        } else {
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7128, lng: -74.0060},
          zoom: 11
        })
        this.props.sitters.forEach((sitter) => {
          let content = `<div> ${sitter.first_name} </div>`
          let info = new window.google.maps.InfoWindow({
            content: content
          })
          let marker =  new window.google.maps.Marker({
                position: JSON.parse(sitter.coordinates) ,
                map: map
              })
          info.open(map , marker)
          })
            }
  }

  // JSON.parse(sitter.coordinates)

  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }

  // geocode = (place) => {
  //   let location = place
  //   let url = new URL("https://maps.googleapis.com/maps/api/geocode/json")
  //   url.searchParams.append("address", location)
  //   let finalUrl = url + `&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`
  //   fetch(finalUrl)
  //   .then(res => res.json())
  //   .then(res => {
  //     debugger
  //       let newArr = [...this.state.coordinates, res.results[0].geometry.location]
  //       this.setState({
  //         coordinates: newArr
  //       })
  //   })
  // }

  componentDidMount() {
    this.renderMap()
  }

  sitterArr = () => this.props.sitters.filter(sitter => {
      return sitter.id !== this.props.user.id
  })

  render() {
    // debugger
    return (
      <div id="map"> </div>
    )
  }
}

function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

const mapStateToProps = state => {
    return {
      user: state.user,
      sitters: state.sitters
    }
}
export default connect(mapStateToProps)(MapContainer)
