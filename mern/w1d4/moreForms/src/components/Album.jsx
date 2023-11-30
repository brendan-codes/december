const Album = ({album}) => {

    return (
        <>
            { album != "1989" && <li>{album}</li>  }
        </>
    )
}

export default Album;