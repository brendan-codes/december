import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Routes, Route, Link} from 'react-router-dom'
import ShowCars from './views/ShowCars'
import CreateCar from './views/CreateCar'
import EditCar from './views/EditCar'

function App() {  
  // "lifted" state for all cars

  // useEffect loads all cars

  // methods to update cars in state
  // create
  // delete
  // update

  return (
    <>
      <h1>Hello world!</h1>
      <Link to="/cars/create">Create a Car</Link> |  
      <Link to="/cars">Go Home</Link>
      <Routes>
        <Route path="/cars" element={<ShowCars />}/>
        <Route path="/cars/create" element={<CreateCar />}/>
        <Route path="/cars/:id/update" element={<EditCar />}/>
      </Routes>
    </>
  )
}

export default App
