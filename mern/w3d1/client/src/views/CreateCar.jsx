import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default ({addCar}) => {

    const navigate = useNavigate();

    // state data for our inputs
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState(0);

    // form handler
    const FormHandler = (e) => {
        e.preventDefault();
        console.log(make, model, color, year)
        createCarApi({make, model, color, year})
    };

    // createApi request
    const createCarApi = (car) => {
        console.log(car);
        axios.post("http://localhost:8000/api/cars", car)
            .then(({data}) => {
                addCar(data);
                navigate("/cars")
            })
            .catch(err => console.log(err))
    }

    // jsx 
    return (
        <>
            <p>Hello this is CreateCar</p>
            <div>
                <form onSubmit={FormHandler} style={{display:"flex", flexDirection: "column"}}>
                    Make <input type="text" value={make} onChange={e => setMake(e.target.value)}  />
                    Model <input type="text" value={model} onChange={e => setModel(e.target.value)} />
                    Color <input type="text" value={color} onChange={e => setColor(e.target.value)} />
                    Year <input type="number" max={2055} min={1900} value={year} onChange={e => setYear(e.target.value)} />
                    <input type="submit" value={"Add a car!"}/>
                </form>
            </div>
        </>
    )
}