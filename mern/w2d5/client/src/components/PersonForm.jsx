import{ useState } from 'react'
import axios from 'axios';

export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");

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
                // hide errors
                // clear input
                // navigate to new view
                console.log(res)
            })
            .catch(err=>{
                // we had an error
                // show error messages
                console.log(err)
            })
    }
    
    //onChange to update firstName and lastName
    return (
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
    )
}

