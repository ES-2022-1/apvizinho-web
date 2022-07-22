import { useState } from "react";

import { Form } from "antd";

import CheckboxComponent from "../../components/Checkbox";
import VacancyForm from "./VacancyForm";
import { itemsLocal } from "../../models/LocalOptions";
import { itemsVacancy } from "../../models/VacancyOptions";
import AnnouncementForm from "./AnnouncementForm";
import UploadMultiple from "../../components/UploadMultiple";
import {
  H1,
  Wrapper,
  FormDiv,
  CheckDiv,
  Button,
  UploadDiv,
  VacancyFormWrapper,
} from "./style";

const CreateAnnouncement = () => {
  const [form] = Form.useForm();

  const [numeroVagas, setNumeroVagas] = useState(
    form.getFieldValue("numero_de_vagas")
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
    console.log(form.getFieldsValue());
    console.log(form.getFieldValue("numero_de_vagas"));
    setNumeroVagas(form.getFieldValue("numero_de_vagas"));
  };

  return (
    <>
      <Wrapper>
        <FormDiv>
          <H1>Anunciar Vaga</H1>
          <AnnouncementForm
            form={form}
            handleFormValuesChange={handleFormValuesChange}
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
