import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({ baseURL });

const getAuthToken = () => {
  return sessionStorage.getItem("access_token");
};

export const registerUser = async (payload) => {
  console.log(payload);
  const response = await api.post("/user/", payload);

  return response;
};

export const login = async (payload) => {
  const response = await api.post("/session", payload);

  return response;
};

export const listUser = async () => {
  let token = getAuthToken();
  const response = await api.get("/user/", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response;
};

export const registerAnnouncement = async (payload) => {
  const response = await api.post("/announcement", payload, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export const listAnnouncement = async () => {
  const response = await api.get("/announcement/", {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export default api;
