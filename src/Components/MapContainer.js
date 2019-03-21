import React from 'react'
import {GoogleApiWrapper, Map, Marker} from "google-maps-react"


class MapContainer extends React.Component {

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7128, lng: -74.0060},
      zoom: 8
    })
  }

  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }

  componentDidMount() {
    this.renderMap()
  }

  render() {


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
export default MapContainer
    // apiKey: (process.env.REACT_APP_GOOGLE_MAPS_KEY)
