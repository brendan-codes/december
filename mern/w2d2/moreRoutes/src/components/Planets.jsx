import { useParams } from "react-router-dom";

const Planets = () => {
    const { id } = useParams();
    return (
        <p>Hello Planets id is { id }</p>
    )
}

export default Planets;