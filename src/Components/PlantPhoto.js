import React from 'react'
import Image from 'react-image-resizer'

const PlantPhoto = (props) => {



  return(
    <div className = 'photo-container' style={{backgroundImage: `url(${props.url})`}}>

      </div>
  )
}

export default PlantPhoto
