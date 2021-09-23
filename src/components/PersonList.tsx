import { PersonInterface } from "./interfaces/PersonInterface"

export const PersonList: React.FC<PersonInterface> = ({ person }) => {
    const renderList = ()=> {
        return person.map(persons => 
            <li className="List">
                <div className="List-header">
                    <img src={persons.photoUrl} alt="user" className="List-img" />
                    <h2>{ persons.name}</h2>
                </div>
                <p>{persons.age} years old</p>
                <p className="List-note">{ persons.note}</p>
            </li>    
        )
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}