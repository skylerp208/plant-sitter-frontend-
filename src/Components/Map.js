import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 40.7,
      lng: -73.9
    },
    zoom: 11
  }


  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
     <GoogleMapReact
       bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
       defaultCenter={this.props.center}
       defaultZoom={this.props.zoom}
     >
       <AnyReactComponent
         lat={59.955413}
         lng={30.337844}
         text={'Kreyser Avrora'}
       />
     </GoogleMapReact>
   </div>
    )
  }
}

export default Map
