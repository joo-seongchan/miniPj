import axios from "axios";

export const joinApi = axios.create({
  baseURL: "http://192.168.0.239:6111",
});

export const loginApi = {
  login: (term) => joinApi.post(`login`, { term }),
};
