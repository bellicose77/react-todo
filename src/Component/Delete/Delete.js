import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Delete = () => {
    const[users,setUsers]=useContext(UserContext);
    const{id}=useParams();
    const user = users.filter(user=>user.id!==id)
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
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">OK</Button>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Delete;