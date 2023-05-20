import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigator = useNavigate()
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const inputChange = (e) => {
    
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
        navigator('/home')
  };

  return (
    <Form onSubmit={submit} className=" p-5">
      <Form.Group className="mb-3 col-6 m-auto" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onClick={inputChange} type="email" placeholder="Enter email" required />
        <Form.Text className="text-danger">
          {error.email && (
            <i class="bi bi-exclamation-circle"> {error.email}</i>
          )}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col-6 m-auto" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onClick={inputChange} type="password" placeholder="Password" required />
        <Form.Text className="text-danger">
          {error.password && (
            <i class="bi bi-exclamation-circle"> {error.password}</i>
          )}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 col-6 m-auto" controlId="formBasicCheckbox">
     
        <Button className="col-12 m-auto" variant="primary" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}
