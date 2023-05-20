import React, { useState } from "react";
import { coffeeTypes } from "../assets/coffeeTypes";
import { CoffeeCard } from "./CoffeeCard";
import "../css/description.css";

export function Description() {
  const [state, setState] = useState({
    search: "",
    searchList: [...coffeeTypes],
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
   
  };

  const searchHandler = () => {
    if (!state.search) {
        setState({
            ...state,
            searchList: [...coffeeTypes],
          });
      return;
    }

    const regex = new RegExp(state.search.trim(), "gi");

    // let patternData = regex.toString().split('/')[1]
    let list = coffeeTypes.filter(
      (item) => regex.test(item.type) || regex.test(item.description),
    );

    list = list.map((item) => {
      return {
        type: item.type.replace(regex, `<mark>${"$&"}</mark>`),
        description: item.description.replace(regex, `<mark>${"$&"}</mark>`),
      };
    });

    setState({
      ...state,
      searchList: [...list],
    });
  };

  return (
    <div className="coffee-main-container d-flex px-5 py-5 m-2 flex-column justify-content-center gap-5 bg-dark">
      <section className="search-box d-flex flex-column justify-content-center align-items-center gap-2 bg-dark">
        <input
          onChange={inputHandler}
          type="text"
          className="form-control w-50"
          name="search"
          placeholder="Search for description...."
        ></input>
        <button
          onClick={searchHandler}
          className="btn w-25 btn-outline-warning"
        >
          Search
        </button>
      </section>

      <section className="coffee-list p-5 d-flex flex-column gap-3 justify-content-start">
        {state.searchList.map((item, index) => (
          <CoffeeCard key={index} item={item}></CoffeeCard>
        ))}
      </section>
    </div>
  );
}
