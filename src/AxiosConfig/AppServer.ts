import axios, { AxiosInstance } from 'axios';

// This sets a default address from which all paths starts

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3333",
});

export default api;