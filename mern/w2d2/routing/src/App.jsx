import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Details from './components/Details'
import List from './components/List'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [counter, setCounter] = useState(0);
  const number = 55;

  return (
    <>
      <h1>App.jsx</h1>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Click!</button>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to={`/details/${number}`}>Details</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      <Routes>
        <Route path="/details/:unicorns/:id" element={<Details />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
