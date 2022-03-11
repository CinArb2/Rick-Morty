import React, { useEffect, useState } from 'react'


function ResidentInfo({ api }) {
  const [dataInd, setDataInd] = useState({})

  useEffect(() => {
    fetch(api)
      .then(resp => resp.json())
      .then(data=>setDataInd(data))
  }, [])

  return (
    <div className="resident-info blue-700">
      <img className="resident-img" src={dataInd.image} alt="" />
      <h2>{dataInd.name}</h2>
      <span className='description'>Raza</span>
      <p>{dataInd.species}</p>
      <span className='description'>Origen</span>
      <p>{dataInd.origin?.name}</p>
      <span className='description'>Aparicion</span>
      <p>{dataInd.episodes?.length}</p>
    </div>
  )
}

export default ResidentInfo