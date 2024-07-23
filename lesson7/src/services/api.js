import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:3001/",
});

export const getBlogs = async () => {
  try {
    const response = await http.get("blog");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const createBlog = async (data) => {
  try {
    const response = await http.post("blog", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const createAdminBlog = async (data) => {
  try {
    const response = await http.post("homeblogs", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAdminBlog = async (id) => {
  try {
    const response = await http.delete(`homeblogs/${id}`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const createCategory = async (data) => {
  try {
    const response = await http.post("category", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
