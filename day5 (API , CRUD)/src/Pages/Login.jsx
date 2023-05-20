import React from "react";
import { Button, Form } from "react-bootstrap";
import "../css/login.css";

export function Login() {
  return (
    <Form className="login container my-5 p-5 bg-dark w-50 d-flex gap-4 flex-column align-items-center ">
      <Form.Group className="w-75 px-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="w-75 px-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className="btn w-25 btn-outline-light" type="submit">
        Submit
      </Button>
    </Form>
  );
}
