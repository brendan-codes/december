import { useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'

function App() {

  const [albums, setAlbums] = useState([
      'Labor Days', 
      'Float', 
      '1989', 
      '1989', 
      'Lover'
  ]);

  const addToAlbums = (newAlbum) => { setAlbums([...albums, newAlbum]) }

  const removeFromAlbums = (album) => { 
    const newAlbums = albums.filter((value) => value != album);
    console.log(newAlbums);
    setAlbums(newAlbums);
  }

  return (
    <>
      <h1>Hello World! Welcome to Albums</h1>
      <Form addToAlbums={addToAlbums}/>
      <Display 
        albums={albums} 
        removeFromAlbums={removeFromAlbums}
      />
    </>
  )
}

export default App
