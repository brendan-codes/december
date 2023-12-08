import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </>
  )
}

export default App
