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

export const registerAnnouncement = async (payload) => {
  const response = await api.post("/announcement", payload);

  return response;
};

export const listAnnouncement = async () => {
  const response = await api.get("/announcement/");

  return response;
};

export default api;
