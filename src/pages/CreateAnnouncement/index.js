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

const CreateAnnouncement = () => {
  const [announcementForm] = Form.useForm();
  const [addressForm] = Form.useForm();

  const [numeroVagas, setNumeroVagas] = useState(
    announcementForm.getFieldValue("numero_de_vagas")
  );

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
    setNumeroVagas(announcementForm.getFieldValue("numero_de_vagas"));
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
            items={itemsLocal}
            title="Sobre o local"
            setOptions={handleSetLocalOptions}
          />
          <VacancyFormWrapper>
            {[...Array(numeroVagas).keys()].map((i) => (
              <VacancyForm
                key={i + 1}
                items={itemsVacancy}
                title={`Sobre a vaga ${i + 1}`}
                setOptions={handleSetVacancyOptions}
              />
            ))}
          </VacancyFormWrapper>
          <Button onClick={() => console.log(localOptions, vacancyOptions)}>
            Criar anúncio
          </Button>
        </CheckDiv>
      </Wrapper>
    </>
  );
};

export default CreateAnnouncement;
