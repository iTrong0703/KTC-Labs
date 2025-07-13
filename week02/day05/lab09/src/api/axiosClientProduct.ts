// src/api/axiosClient.ts
import axios from "axios";

const axiosClientProduct = axios.create({
  baseURL: "https://6870769d7ca4d06b34b6dc65.mockapi.io/api/v1/products",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosClientProduct;
