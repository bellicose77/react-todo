import React from 'react';
import { Form } from 'react-bootstrap';

const Create = () => {
    return (
        <div>
         <Form >
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={}
            onChange={}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={}
            onChange={}
            placeholder="Enter Position"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={}
            onChange={}
            placeholder="Enter Salary"
          />
        </Form.Group>
        </Form>
        </div>
    );
};

export default Create;