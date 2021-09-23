import React, { useState } from "react"
import { PersonInterface } from "./interfaces/PersonInterface"

interface IsProps{
    person: PersonInterface["person"]
    setPerson:React.Dispatch<React.SetStateAction<PersonInterface["person"]>>
}

const AddToList:React.FC<IsProps> = ({person,setPerson}) => {
    const [input, setInput] = useState({
        name: "",
        age: 0,
        photoUrl: "",
        note: ""
    });
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({...input,[e.target.name]: e.target.value})
    }
    const handleClick = () => {
        if (!input.name || !input.age || !input.photoUrl) {
            return
        }
        setPerson([...person, {
            name: input.name,
            age: input.age,
            photoUrl: input.photoUrl,
            note: input.note
        }]);
        setInput({
            name: "",
            age: 0,
            photoUrl: "",
            note: ""
        })
    }
    return (
        <div className="AddToList">
            Add to List
            <input
                type="text"
                className="AddToList-input"
                placeholder="Name"
                value={input.name}
                name="name"
                onChange={handleChange}
            />
            <input
                type="number"
                className="AddToList-input"
                placeholder="Age"
                value={input.age}
                name="age"
                onChange={handleChange}
            />
            <input type="text"
                className="AddToList-input"
                placeholder="Image url"
                value={input.photoUrl}
                name="photoUrl"
                onChange={handleChange}
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                cols={30} rows={10}
                value={input.note}
                name="note"
                onChange={handleChange}
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >Add To List</button>
        </div>
    )
}

export default AddToList;