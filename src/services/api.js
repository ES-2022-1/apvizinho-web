import { notification } from "antd";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({ baseURL });

const getAuthToken = () => {
  return sessionStorage.getItem("access_token");
};

api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const access_token = sessionStorage.getItem("access_token");
    if (access_token) {
      const obj = jwtDecode(access_token);

      const expirationTime = obj.exp * 1000 - 60000;

      if (Date.now() > expirationTime) {
        sessionStorage.removeItem("access_token");
        notification.error({
          message: "Session expired.",
        });

        const navigate = useNavigate();
        navigate("/login", { replace: true });

        return Promise.reject("Session expired");
      }
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const registerUser = async (payload) => {
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

export const uploadAnnoucementImages = async (idAnnoucement, formData) => {
  const response = await api.post(
    `/announcement/${idAnnoucement}/upload`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${getAuthToken()}`,
        "Content-Type": "multipart/form-data; boundary=XXXX; charset=utf-8",
      },
    }
  );

  return response;
};

export const getAnnouncement = async (idAnnoucement) => {
  const response = await api.get(`/announcement/${idAnnoucement}`, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export const updateAnnouncement = async (idAnnoucement, payload) => {
  const response = await api.put(`/announcement/${idAnnoucement}`, payload, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export const updateAddress = async (idAddress, payload) => {
  const response = await api.put(`/address/${idAddress}`, payload, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export const updateVacancy = async (idVacancy, payload) => {
  const response = await api.put(`/vacancy/${idVacancy}`, payload, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export const addVacancy = async (payload) => {
  const response = await api.post(`/vacancy/`, payload, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export const deleteVacancy = async (idVacancy) => {
  const response = await api.delete(`/vacancy/${idVacancy}`, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export default api;
