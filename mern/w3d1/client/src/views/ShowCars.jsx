import { Link } from 'react-router-dom';

export default ({cars}) => {
    return (
        <>
            {
                cars.map(({_id, make, model, year, color}, key) =>      
                    <div key={key}>
                        <hr />  
                        <div>
                            <p>Id: {_id}</p>
                            <p>make: {make}</p>
                            <p>model: {model}</p>
                            <p>color: {color}</p>
                            <p>year: {year}</p>
                            <p>edit: <Link to={`/cars/${_id}/edit`}>Edit this car!</Link></p>
                        </div>
                    </div>
                
                )
            }
        </>
    )
}