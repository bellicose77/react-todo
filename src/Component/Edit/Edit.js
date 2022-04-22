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
    // console.log('f',update);
    const handleUpdate = (e) =>{
        const nameValue=e.target.name;
        const mainValue=e.target.value;
        setUpdate({...update,nameValue:mainValue});
        //const valueinput=update;
       if(nameValue == 'name'){
           user[0].name=e.target.value;
       }
       else if(mainValue == 'position'){
           user[0].position=e.target.value;
       }
       else{
           user[0].salary=e.target.value;
       }
    }
    console.log('valu',user);
  

    const handleSubmitUpdate=(e)=>{
        e.preventDefault();
        setUsers([...users])
    }
    //console.log(users)
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
            value={update.name}
            onChange={handleUpdate}
            placeholder={user[0].name}
           
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="position"
            value={update.value}
            onChange={handleUpdate}
            placeholder={user[0].position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="salary"
            value={update.salary}
            onChange={handleUpdate}
            placeholder={user[0].salary}
          />
        </Form.Group>
        <Link to="/">
          <Button onClick={(e)=>handleSubmitUpdate(e)} variant="primary" type="submit">
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