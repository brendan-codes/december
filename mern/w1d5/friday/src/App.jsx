import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {

  const [dogs, setDogs] = useState([
    {name: "Melody", size: "Huge", age: 1.2, adopted: false},
    {name: "Cinder", size: "Tiny", age: 8, adopted: true},
    {name: "Ajax", size: "Tiny", age: 6, adopted: false}
  ]);

  const addDog = (dog) => setDogs([...dogs, dog]);

  const adoptDog = (index) => {
    const newDogs = dogs.map((value, idx) => 
      idx != index ? value : {...value, adopted: !value.adopted}
    )

    console.log(newDogs);
    setDogs(newDogs);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <Display dogs={dogs} adoptDog={adoptDog} />
      <Form addDog={addDog} />
    </>
  )
}

export default App
