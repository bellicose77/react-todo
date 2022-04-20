import React from 'react';
import { useParams } from 'react-router-dom';

const Delete = () => {
    const{id}=useParams()
    return (
        <div>
            <h2>This is delete page  {id}</h2>
        </div>
    );
};

export default Delete;