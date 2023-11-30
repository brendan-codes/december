import Album from "./Album";

const Display = (props) => {
    const {albums} = props;

    return (
        <>
            <p>Hello Display!</p>
            <ul>
            {
                albums.map((album, idx) => 
                    <Album key={idx} album={album}/>
                )
            }
            </ul>
        </>
    )
}

export default Display;