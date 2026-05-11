import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
  },
});