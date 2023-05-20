import React, { useState } from "react";
import "../css/customer.css";
import { Table } from "react-bootstrap";

export function Customer() {

    const [values, setValues] = useState({
        name: "",
        age: "",
        customers: [],
        hasData: false
      });
    
      const [error, setError] = useState({
        name: null,
        age: null,
      });

      const inputHandler = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
      }

      const addHandler = (e) =>{
        e.preventDefault()
        setValues({
            ...values,
            customers:[
                ...values.customers,
                {
                    'name': values.name,
                    'age': values.age
                }
            ]
        })
      }
    console.log(values)
  return (
    <div className="bg-dark m-5 customer">
      <form onSubmit={addHandler} className="p-5 customer-data">
        <input
        name="name"
        onChange={inputHandler}
          type="text"
          className="form-control w-50"
          placeholder="Name"
          required
        ></input>
        <input
        name="age"
        onChange={inputHandler}
          type="number"
          min={1}
          max={100}
          className="form-control w-50"
          placeholder="age"
          required
        ></input>
        <button className="btn  btn-outline-warning w-25">Add</button>
      </form>

      <section>
        {  <Table bordered  size="sm" className="table">
          <thead>
            <tr className="text-danger text-center">
              <th>#</th>
              <th>Name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>

            {
                values.customers.map((item, index) =><tr key={index} className="text-primary text-center">
                <td>{index +1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr> )
            

            }
            
          </tbody>
        </Table>
}
      </section>
    </div>
  );
}
