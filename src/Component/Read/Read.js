import React from 'react';
import { useParams } from 'react-router-dom';

const Read = () => {

    const {id}=useParams();
    return (
        <div>
            <h2>The information of User:{id} </h2>
        </div>
    );
};

export default Read;