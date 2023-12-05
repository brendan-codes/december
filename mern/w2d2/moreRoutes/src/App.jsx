import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import People from './components/People'
import Planets from './components/Planets'

function App() {
  const [category, setCategory] = useState("planet");
  const [id, setId]             = useState(0);

  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    const cat = category;
    const dataId = id;
    navigate(`/${cat}/${dataId}`)
  }

  return (
    <>
      <div>
        Cat: {category} <br />
        id: { id }
        <div>
        Search for:
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="planet">Planet</option>
          <option value="people">People</option>
        </select>
        </div>
        <div>
         Id: <input onChange={(e) => setId(e.target.value)} value={id} type="number" />
        </div>
        <button onClick={search}>Search</button>
      </div>
      <Routes>
        <Route path={"/people/:id"} element={<People />}/>
        <Route path={"/planet/:id"} element={<Planets />}/>
      </Routes>
    
    </>
  )
}

export default App
