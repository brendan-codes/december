import {useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default ({updateCar}) => {

    const { id } = useParams();
    const navigate = useNavigate();


    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cars/${id}`)
            .then(({data}) => {
                setMake(data.make);
                setModel(data.model);
                setColor(data.color);
                setYear(data.year);
            })
            .catch((err) => console.log(err))
    }, [])

    const FormHandler = (e) => {
        e.preventDefault();

        editCarApi({make, model, year, color})
    }

    const editCarApi = (edit) => {
        axios.patch(`http://localhost:8000/api/cars/${id}`, edit)
            .then(({data}) => {
                console.log(data);
                updateCar(data, id);
                navigate("/cars");
            })
            .catch(err => console.log(err))

    }

    return (
        <>
        <h1>Edit this {model}</h1>
        <div>
            <form onSubmit={FormHandler} style={{display:"flex", flexDirection: "column"}}>
                Make <input type="text" value={make} onChange={e => setMake(e.target.value)} />
                Model <input type="text" value={model} onChange={e => setModel(e.target.value)} />
                Color <input type="text" value={color} onChange={e => setColor(e.target.value)} />
                Year <input type="number" max={2055} min={1900} value={year} onChange={e => setYear(e.target.value)} />
                <input type="submit" value={"Add a car!"}/>
            </form>
        </div>
        </>
    )
}