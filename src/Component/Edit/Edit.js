import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Edit = () => {
    const[users,setUsers]=useContext(UserContext);
    const {id} = useParams();
    const user = users.filter(user => user.id==id);
    const [update,setUpdate]=useState({name:user[0].name,position:user[0].position,
        salary:user[0].salary

    })
    console.log('f',update);
    const handleUpdate = (e) =>{
        
    }
    return (
        <div>
     <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="name"
            // value={user[0].name}
            placeholder={user[0].name}
           
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="position"
            // value={user[0].position}
            // onChange={editPosition}
            placeholder={user[0].position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="salary"
            // value={salary}
            // onChange={editSalary}
            placeholder={user[0].salary}
          />
        </Form.Group>
        <Link to="/">
          <Button variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
        </div>
    );
};

export default Edit;