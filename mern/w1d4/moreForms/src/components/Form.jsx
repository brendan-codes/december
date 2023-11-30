import { useState } from "react";

const Form = ({addToAlbums}) => {

    const [album, setAlbum] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        addToAlbums(album);
        setAlbum("");
    }

    return (
        <>
            <p>Add your favorite Album:</p>
            <p>Here is your text: {album}</p>
            <input 
                type="text" 
                onChange={(e) => setAlbum(e.target.value)}
                value={album}
            />
            <br />
            <button onClick={submitHandler}>Add Album</button>
        </>
    )
}

export default Form;