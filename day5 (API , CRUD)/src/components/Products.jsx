import React, { useEffect, useState } from "react";
import "../css/products.css";
import { CoffeeAPI } from "../API/coffeeApi";
import { CoffeeCard } from "./CoffeeCard";

export function Products() {
    const [state, setState] = useState({
        machines: [],
    })

  const coffee = async () => {
    let res = await CoffeeAPI.getProducts();
    
    setState({
        ...state,
        machines: [...res.data]
    })
  };

  useEffect(() => {
    coffee()
  }, []);

  const updateMachines = (list) => {
      setState({
        machines: [...list]
      })
  }

  console.log(state.machines)
  return (
    <div className="product-container mt-4 text-center">
    <section className="products row gap-5 justify-content-center">
        {state.machines.map((item, index) => <CoffeeCard key={index} item={item} updateMachines={updateMachines}></CoffeeCard>)}
    </section>
    </div>
  );
}
