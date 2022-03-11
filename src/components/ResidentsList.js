
import React from 'react'
import ResidentInfo from './ResidentInfo'

const ResidentsList = ({ data }) => {
  console.log(data.residents?.length)
  return (
    <div className="wrapper d-flex">

      {
        data.residents?.map(el => (
          <ResidentInfo key={Math.random() * 1000} api={el}/>
        ))
      }
    </div>
  )
}

export default ResidentsList