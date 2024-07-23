import axios from "axios";

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const createBlogs = async (data) => {
  const response = axios.post("http://localhost:3002/blogs", data);
  return (await response).data;
};

export const deleteBlog = async (id) => {
  const response = axios.delete(`http://localhost:3002/blogs/${id}`);
  return (await response).data;
};
