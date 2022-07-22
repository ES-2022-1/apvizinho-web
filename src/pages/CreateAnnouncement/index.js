import { useState } from "react";
import CheckboxComponent from "../../components/Checkbox";
import VacancyForm from "./VacancyForm";
import { itemsLocal } from "../../models/LocalOptions";
import { itemsVacancy } from "../../models/VacancyOptions";
import AnnouncementForm from "./AnnouncementForm";
import UploadMultiple from "../../components/UploadMultiple";
import { H1, Wrapper, FormDiv, CheckDiv, Button, UploadDiv } from "./style";

const CreateAnnouncement = () => {
  const [localOptions, setLocalOptions] = useState({});

  const [vacancyOptions, setVacancyOptions] = useState({});

  const handleSetLocalOptions = (index, value) => {
    setLocalOptions({ ...localOptions, [index]: value });
  };

  const handleSetVacancyOptions = (index, value) => {
    setVacancyOptions({ ...vacancyOptions, [index]: value });
  };

  return (
    <>
      <Wrapper>
        <FormDiv>
          <H1>Anunciar Vaga</H1>
          <AnnouncementForm />
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
          <VacancyForm
            items={itemsVacancy}
            title="Sobre a vaga"
            setOptions={handleSetVacancyOptions}
          />
          <Button onClick={() => console.log(localOptions, vacancyOptions)}>
            Criar anúncio
          </Button>
        </CheckDiv>
      </Wrapper>
    </>
  );
};

export default CreateAnnouncement;
