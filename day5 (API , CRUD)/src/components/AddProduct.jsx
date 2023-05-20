import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../css/addProducts.css";
import { useNavigate, useParams } from "react-router-dom";
import { CoffeeAPI } from "../API/coffeeApi";

export function AddProduct() {
  const navigator = useNavigate()
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const inputHandler = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault()
    try{

        let res = await CoffeeAPI.addProduct(formValues)
        console.log('axios res ==>', res)
        navigator('/products')
    }catch(e){
        alert(e)
    }
  };
  
  return (
    <Form  onSubmit={submitHandler} className="add container mt-5 p-5 w-75 bg-dark d-flex text-light flex-column gap-4 justify-content-center align-items-center">
      <Form.Group className="w-50" controlId="formBasicEmail">
        <Form.Label>Machine Name</Form.Label>
        <Form.Control onChange={inputHandler} type="text" placeholder="Machine" name={'name'} required />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="w-50" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={inputHandler} type="text" placeholder="description" required name={'description'}/>
      </Form.Group>

      <Form.Group className="w-50" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control onChange={inputHandler} type="number" min={"0"} placeholder="0" required name={'price'}/>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="w-25 btn btn-dark btn-outline-warning"
      >
        Add
      </Button>
    </Form>
  );
}
