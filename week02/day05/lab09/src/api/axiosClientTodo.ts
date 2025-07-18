import axios from "axios";

const axiosClientTodo = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosClientTodo;
