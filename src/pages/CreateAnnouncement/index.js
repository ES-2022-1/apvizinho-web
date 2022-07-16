import { Button } from "antd";
import { useState } from "react";
import CheckboxComponent from "../../components/Checkbox";
import { itemsLocal } from "../../models/LocalOptions";
import { itemsVacancy } from "../../models/VacancyOptions";

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
      <CheckboxComponent
        items={itemsLocal}
        title="Sobre o local"
        setOptions={handleSetLocalOptions}
      />
      <CheckboxComponent
        items={itemsVacancy}
        title="Sobre a vaga"
        setOptions={handleSetVacancyOptions}
      />
      <Button onClick={() => console.log(localOptions, vacancyOptions)}>
        opções salvas
      </Button>
    </>
  );
};

export default CreateAnnouncement;
