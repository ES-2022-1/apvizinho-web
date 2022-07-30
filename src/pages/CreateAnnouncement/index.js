import { useState } from "react";

import { Form } from "antd";

import CheckboxComponent from "../../components/Checkbox";
import VacancyForm from "../../components/VacancyForm";
import { itemsLocal } from "../../models/LocalOptions";
import { itemsVacancy } from "../../models/VacancyOptions";
import AnnouncementForm from "../../components/AnnouncementForm";
import UploadMultiple from "../../components/UploadMultiple";
import {
  Wrapper,
  FormDiv,
  CheckDiv,
  Button,
  UploadDiv,
  VacancyFormWrapper,
} from "./style";
import { registerAnnouncement } from "../../services/api";

const CreateAnnouncement = () => {
  const [announcementForm] = Form.useForm();
  const [addressForm] = Form.useForm();

  const [numeroVagas, setNumeroVagas] = useState(
    announcementForm.getFieldValue("vacancies")
  );

  const [localOptions, setLocalOptions] = useState(itemsLocal);

  const [vacancyOptions, setVacancyOptions] = useState([
    { ...itemsVacancy, gender: "NONE", price: 0 },
  ]);

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
          vacancyOptions[i] || { ...itemsVacancy, gender: "NONE", price: 0 }
      );
      setVacancyOptions(newVacancyArray);

      setNumeroVagas(newVacancyQt);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      ...announcementForm.getFieldsValue(),
      address: { ...addressForm.getFieldsValue() },
      ...localOptions,
      vacancies: vacancyOptions,
    };

    const response = await registerAnnouncement(payload);

    console.log(response);
  };

  return (
    <>
      <Wrapper>
        <FormDiv>
          <AnnouncementForm
            announcementForm={announcementForm}
            addressForm={addressForm}
            handleAnnouncementFormValuesChange={handleFormValuesChange}
            handleAddressFormValuesChange={handleFormValuesChange}
          />
          <UploadDiv>
            <h2>Adicionar fotos</h2>
            <UploadMultiple />
          </UploadDiv>
        </FormDiv>
        <CheckDiv>
          <CheckboxComponent
            items={localOptions}
            title="Sobre o local"
            setOptions={handleSetLocalOptions}
          />
          <VacancyFormWrapper>
            {[...Array(numeroVagas).keys()].map((i) => (
              <VacancyForm
                key={i + 1}
                index={i}
                items={vacancyOptions[i]}
                title={`Sobre a vaga ${i + 1}`}
                setOptions={handleSetVacancyOptions}
              />
            ))}
          </VacancyFormWrapper>
          <Button onClick={handleSubmit}>Criar anúncio</Button>
        </CheckDiv>
      </Wrapper>
    </>
  );
};

export default CreateAnnouncement;
