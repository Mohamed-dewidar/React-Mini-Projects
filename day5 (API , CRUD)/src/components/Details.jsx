import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CoffeeAPI } from "../API/coffeeApi";
import "../css/details.css";

export function Details() {
  const { id } = useParams();
  const navigator = useNavigate()
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const getMachineData = async () => {
    let res = await CoffeeAPI.getProduct(id);
    setData(res.data);
  };

  useEffect(() => {
    getMachineData();
  }, []);

  const backHandler = () => {
    navigator('/products')
  }

  return (
    <div className='main-details container mt-5 p-5'>
      <div className="details container p-4 lead d-flex flex-column gap-3  align-items-center">
        <h3>{data.name}</h3>
        <p className="fs-5">{data.description}</p>
        <h5>Price {data.price} EGP</h5>
        <button onClick={backHandler} className="btn btn-outline-warning align-self-start w-25">Back</button>
      </div>
    </div>
  );
}
