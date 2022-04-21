import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Home = () => {
    const[users,setUsers]=useContext(UserContext);
    //console.log(user)
    return (
        <div>
            <Button variant="primary">Add User</Button>
            <br/>
            <br/>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>First Name</th>
      <th>Position</th>
      <th>Salary</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  
      {
         
          users.map(user => 
            <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.position}</td>
            <td>{user.salary}</td>
            <td>
              <Link to={`/read/:${user.id}`}>
              <Button variant='success'>Read</Button>
              </Link>
                
                <Button variant='info'>Edit</Button>
                <Link to={`delete/${user.id}`}>
                <Button variant='danger'>Delete</Button>
                </Link>
                
            </td>
          </tr>
          )
      }
   
  </tbody>
</Table>
        </div>
    );
};

export default Home;