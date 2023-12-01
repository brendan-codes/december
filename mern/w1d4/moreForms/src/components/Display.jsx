import Album from "./Album";

const Display = (props) => {
    const {albums,removeFromAlbums} = props;

    return (
        <>
            <p>Hello Display!</p>
            <ul>
            {
                albums.map((album, idx) => 
                    <Album 
                        key={idx} 
                        album={album} 
                        removeFromAlbums={removeFromAlbums}
                    />
                )
            }
            </ul>
        </>
    )
}

export default Display;