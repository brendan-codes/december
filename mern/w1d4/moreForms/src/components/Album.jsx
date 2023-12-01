const Album = ({album, removeFromAlbums}) => {

    return (
        <>
            { 
            album != "1989" && 
            <div>
                <p>Name: {album}</p>
                <p>
                    <button onClick={(e) => removeFromAlbums(album)}>Delete this one!</button>
                </p>
            </div>  
            }
        </>
    )
}

export default Album;