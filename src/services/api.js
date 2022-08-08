import { notification } from "antd";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const baseURL = "http://www.api.apvizinho.com/";

const api = axios.create({ baseURL });

api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const access_token = localStorage.getItem("@Apvizinho:token");
    if (access_token) {
      const obj = jwtDecode(access_token);

      console.log(obj);
      const expirationTime = obj.exp * 1000 - 60000;

      if (Date.now() > expirationTime) {
        // sessionStorage.removeItem("access_token");
        localStorage.removeItem("@Apvizinho:token");
        localStorage.removeItem("@Apvizinho:user");

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

const getAuthToken = () => {
  return localStorage.getItem("@Apvizinho:token");
};

export const registerUser = async (payload) => {
  const response = await api.post("/user/", payload);

  return response;
};

export const listUser = async () => {
  const response = await api.get("/user/", {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export const getUser = async (userId) => {
  const response = await api.get(`/user/${userId}`, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
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

export const listAnnouncementFilter = async (payload) => {
  const response = await api.post("/announcement/filter", payload, {
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

export const deleteAnnouncement = async (idAnnoucement) => {
  const response = await api.delete(`/announcement/${idAnnoucement}`, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export const deactivateAnnouncement = async (idAnnoucement) => {
  const response = await api.patch(
    `/announcement/${idAnnoucement}/disable`,
    {},
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    }
  );

  return response;
};

export const activateAnnouncement = async (idAnnoucement) => {
  const response = await api.patch(
    `/announcement/${idAnnoucement}/enable`,
    {},
    {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    }
  );

  return response;
};

export const getUserAnnouncements = async (idUser) => {
  const response = await api.get(`/user/${idUser}/announcements`, {
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

export const editUser = async ({ payload, userId }) => {
  const response = await api.put(`/user/${userId}`, payload, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

  return response;
};

export const uploadUserImage = async (idUser, formData) => {
  const response = await api.post(`/user/${idUser}/upload`, formData, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type": "multipart/form-data; boundary=XXXX; charset=utf-8",
    },
  });

  return response;
};

export default api;
