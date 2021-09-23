import React, { useState } from "react"
import AddToList from "./AddToList";
import { PersonInterface } from "./interfaces/PersonInterface"
import { PersonList } from "./PersonList";

export const Person = () => {
    const [person, setPerson] = useState<PersonInterface["person"]>([
        {
            name: "Vincent Tetteh",
            age: 30,
            photoUrl: "https://media-exp1.licdn.com/dms/image/C4D03AQFHrYW3PyEDkg/profile-displayphoto-shrink_200_200/0/1618947950093?e=1632960000&v=beta&t=Ol9ODtNRn-UM_bE5R16R3J8oKZNt4ZhWxhe0b983CeM ",        
            note: "Vincent is a great man"
        }
    ]);

    return (
        <div>
            <PersonList person={person} />
            <AddToList person={person} setPerson={ setPerson}/>
        </div>
    )
}