import axios from "axios";

const baseUrl = "http://localhost:3005";
const getProducts = () => axios.get(`${baseUrl}/coffeeMaker`);
const getProduct = (id) => axios.get(`${baseUrl}/coffeeMaker/${id}`);
const addProduct = (prod) => axios.post(`${baseUrl}/coffeeMaker`, prod);
const editProducts = (id, prod) => axios.put(`${baseUrl}/coffeeMaker/${id}`, prod);
const deleteProducts = (id) => axios.delete(`${baseUrl}/coffeeMaker/${id}`);

export const CoffeeAPI = {
  getProduct,
  getProducts,
  addProduct,
  editProducts,
  deleteProducts,
};
