import { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const addPerson = (person) => setPeople([...people, person]);
    
    
    return (
        <div>
            <PersonForm addPerson={addPerson} />
            <hr/>
            {loaded && <PersonList people={people}/>}
        </div>
    )
}