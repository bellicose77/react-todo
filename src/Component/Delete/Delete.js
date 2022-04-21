import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Delete = () => {
    const[users,setUsers]=useContext(UserContext);
    const{id}=useParams();
    const deleteUser = (id) => {
        const user = users.filter(user=>user.id!=id);
        setUsers(user);
    }
   
    return (
        <div>
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Delete</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Are you sure want to delete?</p>
  </Modal.Body>

  <Modal.Footer>
      <Link to='/'>
      <Button variant="secondary">Cancel</Button>
      <Button onClick={()=>deleteUser(id)} variant="primary">OK</Button>
      </Link>
    
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Delete;