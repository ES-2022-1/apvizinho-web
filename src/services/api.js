import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({ baseURL });

export const registerUser = async (payload) => {
  console.log(payload);
  const response = await api.post("/user/", payload);

  return response;
};

export const getUser = async ({ userId }) => {
  const response = await api.get(`/user/${userId}`);

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

export const editUser = async ({ payload, userId }) => {
  const response = await api.put(`/user/${userId}`, payload);

  return response;
};

export default api;
