import { useState } from 'react';

const Form = () => {
    const [songs, setSongs] = useState(["Jingle Bells", "BLEED", "I'll be home for Christmas", "Silver Bells"])
    const [song, setSong] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
    
        // client side validation
        const newSongs = [...songs, song];

        setSongs(newSongs);
        setSong("");
    }

    return (
        <>
            <h1>Hello Form!</h1>
            Our song is  {song}
            <form onSubmit={submitForm}>
                <input type="text" 
                    onChange={e => {
                        console.log(e.target);
                        setSong(e.target.value)
                    }}
                    value={song}
                />
                <button>Add Song</button>
            </form>
            {
                songs.map((song, i) => 
                     <div key={i}>
                                <p>{song}</p>
                             </div>
                )
            }
        </>
    )
}

export default Form;