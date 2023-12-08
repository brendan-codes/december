import axios from 'axios';
    
const PersonList = ({people}) => {
    return (
        <div>
            {people.map( (person, i) =>
                <p key={i}>{person.lastName}, {person.firstName}</p>
            )}
        </div>
    )
}
    
export default PersonList;

