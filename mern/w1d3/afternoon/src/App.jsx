import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  const [count, setCount] = useState(0)

  const [data, setData] = useState([
    "orange",
    "apple",
    "pear",
    "grapes"
  ])

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>
        we also have a second {count}
      </p>
      {
        data.map((value) => 
          <FunctionalComponent value={value}></FunctionalComponent>
        )
      }
    </>
  )
}

export default App
