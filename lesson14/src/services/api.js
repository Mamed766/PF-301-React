import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchTodo = async () => {
  try {
    const response = await http.get("/todos");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
