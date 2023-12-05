import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const People = () => {
    const { id } = useParams();

    const [personName, setPersonName ] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(({data}) => {
                const { name } = data;
                setPersonName(name);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    

    return (
        <div>
            <p>Hello People the id is { id }</p>
            <p>
                { personName.length > 0 && personName }
            </p>
        </div>
    )
}

export default People;