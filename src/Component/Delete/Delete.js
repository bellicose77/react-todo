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
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Delete;