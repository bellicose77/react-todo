import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';

const Create = () => {
    const[users,setUsers]=useContext(UserContext);
    const[input,setInput]=useState({})
    const handleInput = (e) =>{
        const nameInput=e.target.event;
        setInput([...input,{nameInput:e.target.value}]);
        console.log(input);

    }
    return (
        <div>
         <Form >
        <Form.Group>
          <Form.Control
            type="text"
            name="id"
            onChange={handleInput}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="position"
            onChange={handleInput}
            placeholder="Enter Position"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="salary"
            onChange={handleInput}
            placeholder="Enter Salary"
          />
        </Form.Group>
        </Form>
        </div>
    );
};

export default Create;