import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({ baseURL });

export const registerUser = async (payload) => {
  const response = await api.post("/user/", payload);

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

export const uploadAnnoucementImages = async (idAnnoucement, formData) => {
  const response = await api.post(
    `/announcement/${idAnnoucement}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data; boundary=XXXX; charset=utf-8",
      },
    }
  );

  return response;
};

export const getAnnouncement = async (idAnnoucement) => {
  const response = await api.get(`/announcement/${idAnnoucement}`);

  return response;
};

export const updateAnnouncement = async (idAnnoucement, payload) => {
  const response = await api.put(`/announcement/${idAnnoucement}`, payload);

  return response;
};

export const updateAddress = async (idAddress, payload) => {
  const response = await api.put(`/address/${idAddress}`, payload);

  return response;
};

export const updateVacancy = async (idVacancy, payload) => {
  const response = await api.put(`/vacancy/${idVacancy}`, payload);

  return response;
};

export const addVacancy = async (payload) => {
  const response = await api.post(`/vacancy/`, payload);

  return response;
};

export const deleteVacancy = async (idVacancy) => {
  const response = await api.delete(`/vacancy/${idVacancy}`);

  return response;
};

export default api;
