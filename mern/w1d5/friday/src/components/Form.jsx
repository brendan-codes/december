import { useState } from "react";

const Form = ({addDog}) => {

    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [age, setAge] = useState(0);

    const [errors, setErrors] = useState([]);

    const buttonHandler = () => {
        console.log(name, size, age);
        const errs = [];

        if(name.length < 2){
            errs.push("Name is too short!");
        }
        
        if(size == "Chunky"){
            errs.push("Give your poor dog a diet");
        }
        
        if(errs.length === 0){
            setErrors([]);
            setAge(0);
            setName("");
            setSize("");
            addDog({name, size, age, adopted: true});
        }else{
            setErrors(errs);
        }
    }

    return (
        <>

            {
                errors.map((value, index) => 
                    <p key={index} style={{color:"red"}}>{value}</p>
                )
            }
            <p>Add a dog!</p>
            <p>
                Name: <input 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
            </p>
            <p>
                Size: <input 
                        type="text" 
                        onChange={(e) => setSize(e.target.value)}
                        value={size}
                      />
            </p>
            <p>
                Age: <input 
                        type="number" 
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                      />
            </p>
            <p>
                <button onClick={buttonHandler}>Add this dog!</button>
            </p>
        </>
        
    )
}

export default Form;