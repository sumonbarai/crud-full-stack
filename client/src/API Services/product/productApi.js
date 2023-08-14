import axios from "axios";

const createProduct = async (postBody) => {
  try {
    const URL = `http://localhost:5000/api/v1/createProduct`;
    const result = await axios.post(URL, postBody);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllProduct = async () => {
  try {
    const URL = `http://localhost:5000/api/v1/getProduct`;
    const result = await axios.get(URL);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const singleProduct = async (id) => {
  try {
    const URL = `http://localhost:5000/api/v1/singleProduct/${id}`;
    const result = await axios.get(URL);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (id) => {
  try {
    const URL = `http://localhost:5000/api/v1/deleteProduct/${id}`;
    const result = await axios.delete(URL);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (id, postBody) => {
  try {
    const URL = `http://localhost:5000/api/v1/updateProduct/${id}`;
    const result = await axios.put(URL, postBody);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  createProduct,
  getAllProduct,
  singleProduct,
  deleteProduct,
  updateProduct,
};
