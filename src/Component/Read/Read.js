import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Read = () => {
    const[users,setUsers]=useContext(UserContext)
    const {id}=useParams();
    const user = users.filter(user => user.id==id);
    console.log(user);
    
    return (
        <div>
            <h2>The information of User:{id} </h2>
            <p>Name : {user[0].name}</p>
            <p>Profession:{user[0].position}</p>
            <p>Salary:{user[0].salary}</p>
        </div>
    );
};

export default Read;