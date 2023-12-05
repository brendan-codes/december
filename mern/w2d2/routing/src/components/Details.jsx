import { useParams } from "react-router-dom";

const Details = (props) => {

    const { unicorns, id } = useParams();

    return (
        <p>This is Details and details loves  {unicorns} with the id of {id}</p>
    )
}

export default Details;