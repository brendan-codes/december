const Display = ({dogs, adoptDog}) => {


    return (
        <>
            {
                dogs.map(({name, size, age, adopted}, index) => 
                    <div key={index}>
                        <ul>
                            <li>
                                Name: {name}
                            </li>
                            <li>
                                Size: {size}
                            </li>
                            <li>
                                Age: {age}
                            </li>
                            <li>
                                Adopted: {adopted ? "Yes" : "No"} 
                                <input type="checkbox" 
                                       checked={adopted}
                                       onChange={() => adoptDog(index)} 
                                />
                            </li>
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default Display;