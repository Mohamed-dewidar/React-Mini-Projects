import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CoffeeAPI } from "../API/coffeeApi";

export function CoffeeCard({ item, updateMachines }) {
  const { id, name, description, price } = item;
  
  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      await CoffeeAPI.deleteProducts(id);
      let res = await CoffeeAPI.getProducts()
        updateMachines(res.data)
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="coffee-card col-sm-12 col-md-6 col-3 d-flex flex-column justify-content-around gap-2">
      <h5 className="h-25">{name}</h5>
      <p className="lead  ">{description.slice(0, 40)}</p>
      <h6>{price}</h6>
      <div className="icons fs-3 d-flex justify-content-around">
        <NavLink to={`/editproduct/${id}`}>
          <i className="bi bi-pen-fill text-light"></i>
        </NavLink>
        <NavLink to={`/details/${id}`}>
          <i className="bi bi-eye text-warning"></i>
        </NavLink>
        <i
          onClick={deleteHandler}
          className="bi bi-trash3-fill text-danger"
        ></i>
      </div>
    </div>
  );
}
