
import { useEffect, useState } from 'react';
import './App.css';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import SearchBox from './components/SearchBox'


function App() {
  const [data, setData] = useState({});
  const [id, setId] = useState(Math.floor(Math.random()*126))

  const handleForm = (e, formData) => {
    e.preventDefault()
    setId(formData)
  }
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${id}`)
      .then(resp => resp.json())
      .then(data=>setData(data))
  }, [id])

  return (
    <div className="App">
      <img className="hero" src="./frame.png" alt="" />
      <SearchBox
        click={handleForm}
      />
      <LocationInfo data={data}/>
      <ResidentsList data={data}/>
    </div>
  );
}

export default App;
