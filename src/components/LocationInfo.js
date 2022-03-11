import React from 'react'

const LocationInfo = ({data}) => {
  return (
    <div className="wrapper blue-700">
      <ul className="location-info">
        <li> <span>Name:</span>  {data.name}</li>
        <li><span>Tipo:</span> {data.type}</li>
        <li><span>Dimension:</span> {data.dimension}</li>
        <li><span>Poblacion:</span> {data.residents?.length}</li>
      </ul>
    </div>
  )
}

export default LocationInfo