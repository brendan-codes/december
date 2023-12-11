import{ useState } from 'react'
import axios from 'axios';

export default ({addPerson}) => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");

    const [err, setErr] = useState("");

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>{ 
                const {data} = res;
                // hide errors
                // clear input
                // navigate to new view
                setErr("");
                setFirstName("");
                setLastName("");
                addPerson(data);
            })
            .catch(err=>{
                const {response: {data: {message}}} = err;
                // we had an error
                // show error messages
                setErr(message);
            })
    }
    
    //onChange to update firstName and lastName
    return (
        <div>
            { err ? <h1 style={{color: "red"}}>{err}</h1> : <h1>Add info!</h1>}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

