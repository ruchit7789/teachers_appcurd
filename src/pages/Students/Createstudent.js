import React from "react";
import { Button, Form, Table } from "react-bootstrap";

const Createstudent = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">create student</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>student name</Form.Label>
          <Form.Control type="text" placeholder=" student name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <br />
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Student Realted Toooo..... </Form.Label>

          <Form.Select>
            <option>teacher_A</option>
            <option> teacher_B</option>
            <option> teacher_C</option>
            <option> teacher_D</option>
            <option> teacher_E</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <hr />
      <br />
      <br />
      <br />
      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>student name</th>
            <th className="m-5">action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>
              <button className=" btn btn-success">view</button>
              <button className=" btn ">update</button>
              <button className=" btn btn-danger">delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Createstudent;
