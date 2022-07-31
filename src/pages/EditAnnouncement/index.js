import { useState } from "react";

import { Form } from "antd";

import CheckboxComponent from "../../components/CheckboxForm";
import VacancyForm from "../../components/VacancyForm";
// import { itemsLocal } from "../../models/LocalOptions";
// import { itemsVacancy } from "../../models/VacancyOptions";
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
import {
  extractAnnouncementFields,
  extractLocalOptions,
  extractVacancyOptions,
} from "../../utils/utils";
import { getAnnouncement } from "./mock";

const EditAnnouncement = () => {
  // substituir isso aqui por requisição
  const announcement = getAnnouncement();

  const [announcementForm] = Form.useForm();
  const [addressForm] = Form.useForm();

  // const [numeroVagas, setNumeroVagas] = useState(
  //   announcementForm.getFieldValue("numero_de_vagas")
  // );

  const [localOptions, setLocalOptions] = useState({});

  const [vacancyOptions, setVacancyOptions] = useState({});

  const handleSetLocalOptions = (index, value) => {
    setLocalOptions({ ...localOptions, [index]: value });
  };

  const handleSetVacancyOptions = (index, value) => {
    setVacancyOptions({ ...vacancyOptions, [index]: value });
  };

  const handleFormValuesChange = (/* changedValues, allValues*/) => {
    // console.log(changedValues);
    // console.log(allValues);
    console.log(announcementForm.getFieldsValue());
    console.log(announcementForm.getFieldValue("numero_de_vagas"));
    // setNumeroVagas(announcementForm.getFieldValue("numero_de_vagas"));
  };

  console.log(extractAnnouncementFields(announcement));

  return (
    <>
      <Wrapper>
        <FormDiv>
          <AnnouncementForm
            announcementForm={announcementForm}
            addressForm={addressForm}
            handleAnnouncementFormValuesChange={handleFormValuesChange}
            handleAddressFormValuesChange={handleFormValuesChange}
            announcementInitialValues={extractAnnouncementFields(announcement)}
            addressInitialValues={announcement.address}
          />
          <UploadDiv>
            <h2>Adicionar fotos</h2>
            <UploadMultiple />
          </UploadDiv>
        </FormDiv>
        <CheckDiv>
          <CheckboxComponent
            items={extractLocalOptions(announcement)}
            title="Sobre o local"
            setOptions={handleSetLocalOptions}
          />
          <VacancyFormWrapper>
            {announcement.vacancies.map((vacancy, index) => (
              <VacancyForm
                key={index + 1}
                items={extractVacancyOptions(vacancy)}
                title={`Sobre a vaga ${index + 1}`}
                setOptions={handleSetVacancyOptions}
                price={vacancy.price}
                gender={vacancy.gender}
              />
            ))}
          </VacancyFormWrapper>
          <Button onClick={() => console.log(localOptions, vacancyOptions)}>
            Salvar mudanças
          </Button>
        </CheckDiv>
      </Wrapper>
    </>
  );
};

export default EditAnnouncement;
