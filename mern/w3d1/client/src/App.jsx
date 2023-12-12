import { useState, useEffect } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Routes, Route, Link} from 'react-router-dom'
import ShowCars from './views/ShowCars'
import CreateCar from './views/CreateCar'
import EditCar from './views/EditCar'

function App() {  
  // "lifted" state for all cars
  // dummy data
  const [cars, setCars] = useState([])


  // useEffect loads all cars
  useEffect(() => {
    axios.get("http://localhost:8000/api/cars")
      .then(({data}) => setCars(data))
      .catch(err => console.log(err)) 
  }, [])


  // methods to update cars in state
  // create
  const addCar = (car) => setCars([...cars, car]);
  
  // delete
  const deleteCar = (id) => setCars(cars.filter(({_id}) => _id !== id));

  // update
  const updateCar = (editedCar, id) => {
    const newCars = cars.map(oneCar => oneCar._id === id ? editedCar : oneCar )
    setCars(newCars);
  }

  return (
    <>
      <h1>Hello world!</h1>
      <Link to="/cars/create">Create a Car</Link> |  
      <Link to="/cars">Go Home</Link>
      <Routes>
        <Route path="/cars" element={<ShowCars cars={cars} addCar={addCar} />}/>
        <Route path="/cars/create" element={<CreateCar addCar={addCar} />}/>
        <Route path="/cars/:id/edit" element={<EditCar updateCar={updateCar} />}/>
      </Routes>
    </>
  )
}

export default App
