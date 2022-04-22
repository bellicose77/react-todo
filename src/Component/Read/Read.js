import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Read = () => {
    const[users,setUsers]=useContext(UserContext)
    const {id}=useParams();
    const user = users.filter(user => user.id===id);
    console.log(user);
    
    return (
        <div>
            <h2>The information of User:{id} </h2>
            <p>Name : {user.name}</p>
            <p>Profession:{user.position}</p>
            <p>Salary:{user.salary}</p>
        </div>
    );
};

export default Read;