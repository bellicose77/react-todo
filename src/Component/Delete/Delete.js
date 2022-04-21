import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Delete = () => {
    const[users,setUsers]=useContext(UserContext)
    const{id}=useParams()
    return (
        <div>
            <h2>This is delete page  {id}</h2>
        </div>
    );
};

export default Delete;