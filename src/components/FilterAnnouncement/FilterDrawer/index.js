import { Drawer, Space, Button } from "antd";
import { ButtonRed } from "./style";
import React, { useState } from "react";
import CheckBox from "../../../components/Checkbox";
import VacancyForm from "../../../pages/CreateAnnouncement/VacancyForm";
import { itemsLocal } from "../../../models/LocalOptions";
import { itemsVacancy } from "../../../models/VacancyOptions";

const ShowDrawer = () => {
  const [localOptions, setLocalOptions] = useState({});

  const [vacancyOptions, setVacancyOptions] = useState({});

  const handleSetLocalOptions = (index, value) => {
    setLocalOptions({ ...localOptions, [index]: value });
  };

  const handleSetVacancyOptions = (index, value) => {
    setVacancyOptions({ ...vacancyOptions, [index]: value });
  };

  const [visible, setVisible] = useState(false);
  const [placement] = useState("left");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        <ButtonRed type="primary" onClick={showDrawer}>
          Filtrar
        </ButtonRed>
      </Space>
      <Drawer
        title="Filtro"
        placement={placement}
        closable={true}
        onClose={onClose}
        visible={visible}
        key={placement}
        extra={[
          <Button key="2">Cancelar</Button>,
          <ButtonRed key="1" type="primary">
            OK
          </ButtonRed>,
        ]}
      >
        <CheckBox
          items={itemsLocal}
          title="Sobre o local"
          setOptions={handleSetLocalOptions}
        />
        <VacancyForm
          items={itemsVacancy}
          title="Sobre a vaga"
          setOptions={handleSetVacancyOptions}
        />
      </Drawer>
    </>
  );
};

export default ShowDrawer;
