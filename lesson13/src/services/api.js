import axios from "axios";
const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const filterUserAPi = (payload) => {
  const response = http.get(`/users`, {
    params: payload,
  });
  return response;
};

export class UserService {
  async getUsers(payload) {
    const searchParams = new URLSearchParams();

    if (!!payload.username) {
      searchParams.append("username", payload.username);
    }
    if (!!payload.email) {
      searchParams.append("email", payload.email);
    }
    const baseUrl = new URL("https://jsonplaceholder.typicode.com/users");

    baseUrl.search = searchParams.toString();

    return await axios({
      url: baseUrl.toString(),
      method: "GET",
    });
  }
}
