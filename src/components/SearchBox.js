import React, {useState} from 'react'

function SearchBox({ click }) {
  const [inputData, setInputData] = useState("")

  return (
    <form className="wrapper" onSubmit={(e)=>click(e, inputData)}>
      <input
        type="number"
        placeholder="Type a location ID"
        min="0"
        max="126"
        name='inputData'
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button>Search</button>
    </form>
  )
}

export default SearchBox