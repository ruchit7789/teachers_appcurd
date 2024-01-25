import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

const Createstudent = () => {
  const [commingStudent, setCommingStudent] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:1337/api/students `, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        let commingdata = data.data.map((cv, idx, arr) => {
          return {
            id: cv.id,
            name: cv.attributes.name,
          };
        });
        setCommingStudent(commingdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteStd = (e) => {
    console.log(
      e.target.closest("tr").querySelector("td:first-child").innerHTML
    );
    const confirmation = window.confirm("do you really want to delete");
    const sID = e.target
      .closest("tr")
      .querySelector("td:first-child").innerHTML;

    if (confirmation === true) {
      fetch(` http://localhost:1337/api/students/${sID} `, { method: "DELETE" })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log("data");
          alert("student deleted successfully");
          e.target.closest("tr").remove();
        });
    } else {
      alert("you can delete you need admin access to delete ");
    }
  };

  ///////////////////////yuh he chalte chalte sath chut jyange khabi to milo  na /////////////
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
          {commingStudent.map((cv, idx, arr) => {
            return (
              <tr>
                <td>{cv.id}</td>
                <td>{cv.name}</td>
                <td>
                  <button className=" btn btn-success">view</button>
                  <button className=" btn ">update</button>
                  <button
                    className=" btn btn-danger"
                    onClick={(e) => {
                      deleteStd(e);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Createstudent;
