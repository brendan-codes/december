import { useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'

function App() {

  const [albums, setAlbums] = useState(['Labor Days', 'Float', "1989", "1989", 'Lover']);

  const addToAlbums = (newAlbum) => { setAlbums([...albums, newAlbum]) }

  return (
    <>
      <h1>Hello World! Welcome to Albums</h1>
      <Form addToAlbums={addToAlbums}/>
      <Display albums={albums}/>
    </>
  )
}

export default App
