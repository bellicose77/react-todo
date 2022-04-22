import React from 'react';
import { Form } from 'react-bootstrap';

const Create = () => {
    return (
        <div>
         <Form >
        <Form.Group>
          <Form.Control
            type="text"
            name="id"
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="position"
            placeholder="Enter Position"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            name="salary"
            placeholder="Enter Salary"
          />
        </Form.Group>
        </Form>
        </div>
    );
};

export default Create;