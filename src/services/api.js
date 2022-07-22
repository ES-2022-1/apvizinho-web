import axios from "axios";

const baseURL = "http://www.api.staging.apvizinho.com/";

const api = axios.create({ baseURL });

export const registerUser = async (payload) => {
  const response = await api.post("/user", payload);

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
