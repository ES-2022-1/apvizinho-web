import { useEffect, useState } from "react";

import { Form, notification, Spin } from "antd";

import CheckboxComponent from "../../components/CheckboxForm";
import VacancyForm from "../../components/VacancyForm";
// import { itemsLocal } from "../../models/LocalOptions";
// import { itemsVacancy } from "../../models/VacancyOptions";
import AnnouncementForm from "../../components/AnnouncementForm";
// import UploadMultiple from "../../components/UploadMultiple";
import {
  Wrapper,
  FormDiv,
  CheckDiv,
  Button,
  // UploadDiv,
  VacancyFormWrapper,
} from "./style";
import {
  extractAnnouncementFields,
  extractLocalOptions,
} from "../../utils/utils";
// import { getAnnouncement } from "./mock";
import { useParams } from "react-router-dom";
import {
  addVacancy,
  deleteVacancy,
  getAnnouncement,
  updateAddress,
  updateAnnouncement,
  updateVacancy,
} from "../../services/api";
import { itemsVacancy } from "../../models/VacancyOptions";

const EditAnnouncement = () => {
  const { announcementId } = useParams();

  const [announcement, setAnnouncement] = useState(undefined);

  const [announcementForm] = Form.useForm();
  const [addressForm] = Form.useForm();

  // const [numeroVagas, setNumeroVagas] = useState(
  //   announcementForm.getFieldValue("numero_de_vagas")
  // );

  const [localOptions, setLocalOptions] = useState({});

  const [vacancyOptions, setVacancyOptions] = useState([]);

  const handleSetLocalOptions = (index, value) => {
    setLocalOptions({ ...localOptions, [index]: value });
  };

  const handleSetVacancyOptions = (item, value, index) => {
    const oldOpt = vacancyOptions[index];
    const newOpt = { ...oldOpt, [item]: value };

    const newVacancyArray = [
      ...vacancyOptions.slice(0, index),
      newOpt,
      ...vacancyOptions.slice(index + 1),
    ];

    setVacancyOptions(newVacancyArray);
  };

  const handleFormValuesChange = (changedValues) => {
    if (Object.keys(changedValues).includes("vacancies")) {
      const newVacancyQt = changedValues["vacancies"];

      const newVacancyArray = [...Array(newVacancyQt).keys()].map(
        (i) =>
          vacancyOptions[i] || {
            ...itemsVacancy,
            gender: "UNKNOWN",
            price: 0,
            status: "EMPTY",
            id_announcement: announcementId,
          }
      );
      setVacancyOptions(newVacancyArray);
    }
  };

  const handleSubmit = async () => {
    const payloadAnnoucement = {
      ...announcementForm.getFieldsValue(),
      ...localOptions,
      vacancies: vacancyOptions,
      type: "HOUSE",
      status: "ACTIVE",
    };

    const payloadAddress = {
      ...announcement.address,
      ...addressForm.getFieldsValue(),
    };

    try {
      await updateAnnouncement(announcementId, payloadAnnoucement);
      await updateAddress(announcement.id_address, payloadAddress);

      await Promise.all(
        announcement.vacancies
          .filter(
            (vacancy) =>
              !vacancyOptions.find(
                ({ id_vacancy }) => id_vacancy === vacancy.id_vacancy
              )
          )
          .map((vacancy) => deleteVacancy(vacancy.id_vacancy))
      );

      await Promise.all(
        vacancyOptions
          .filter(
            (vacancy) =>
              !announcement.vacancies.find(
                ({ id_vacancy }) => id_vacancy === vacancy.id_vacancy
              )
          )
          .map((vacancy) => addVacancy(vacancy))
      );

      await Promise.all(
        vacancyOptions
          .filter(
            (vacancy) =>
              !!announcement.vacancies.find(
                ({ id_vacancy }) => id_vacancy === vacancy.id_vacancy
              )
          )
          .map((vacancy) => updateVacancy(vacancy.id_vacancy, vacancy))
      );
    } catch (err) {
      notification.error({
        message: err,
      });
    }
  };

  useEffect(() => {
    getAnnouncement(announcementId)
      .then((response) => {
        setAnnouncement(response.data);
        setLocalOptions(extractLocalOptions(response.data));
        setVacancyOptions(response.data.vacancies);
      })
      .catch((err) =>
        notification.error({
          message: err,
        })
      );
  }, []);

  return (
    <>
      {announcement ? (
        <Wrapper>
          <FormDiv>
            <AnnouncementForm
              announcementForm={announcementForm}
              addressForm={addressForm}
              handleAnnouncementFormValuesChange={handleFormValuesChange}
              handleAddressFormValuesChange={handleFormValuesChange}
              announcementInitialValues={extractAnnouncementFields(
                announcement
              )}
              addressInitialValues={announcement.address}
            />
            {/* <UploadDiv>
                <h2>Adicionar fotos</h2>
                <UploadMultiple />
              </UploadDiv> */}
          </FormDiv>
          <CheckDiv>
            <CheckboxComponent
              items={localOptions}
              title="Sobre o local"
              setOptions={handleSetLocalOptions}
            />
            <VacancyFormWrapper>
              {vacancyOptions.map((vacancy, index) => (
                <VacancyForm
                  key={index + 1}
                  index={index}
                  items={vacancy}
                  title={`Sobre a vaga ${index + 1}`}
                  setOptions={handleSetVacancyOptions}
                />
              ))}
            </VacancyFormWrapper>
            <Button onClick={handleSubmit}>Salvar mudanças</Button>
          </CheckDiv>
        </Wrapper>
      ) : (
        <Spin />
      )}
    </>
  );
};

export default EditAnnouncement;
