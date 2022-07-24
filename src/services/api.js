import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({ baseURL });

export const registerUser = async (payload) => {
  const response = await api.post("/user", payload);

  return response;
};

export const login = async (payload) => {
  const response = await api.post("/session", payload);

  return response;
};

export const listUser = async () => {
  const response = await api.get("/user/");

  return response;
};

export const registerAnnoucement = async (payload) => {
  const response = await api.post("/annoucement", payload);

  return response;
};

export const listAnnoucement = async () => {
  const response = await api.get("/annoucement/");

  return response;
};

export default api;
