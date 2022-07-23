import { Drawer, Space, Button } from "antd";
import { ButtonRed, Select } from "./style";
import React, { useState } from "react";
import CheckBox from "../../../components/Checkbox";
import { Option } from "antd/lib/mentions";
import { itemsLocalMap } from "../../../models/LocalOptions";
import { itemsVacancyMap } from "../../../models/VacancyOptions";

const ShowDrawer = () => {
  // const [localOptions, setLocalOptions] = useState({});
  // const [vacancyOptions, setVacancyOptions] = useState({});
  const [filter, setFilter] = useState([]);
  //const [select, setSelect] = useState({});
  // const { isLoading, isSuccess } = emailConfig.get()
  // const handleSetLocalOptions = (index, value) => {
  //   setLocalOptions({ ...localOptions, [index]: value });
  // };

  // const handleSetVacancyOptions = (index, value) => {
  //   setVacancyOptions({ ...vacancyOptions, [index]: value });
  // };

  const handleFilter = (index, value) => {
    console.log(filter);
    setFilter({ ...filter, [index]: value });
  };

  // const handleSelect = (index, value) => {
  //   setSelect({...select, [index]: value});
  // };

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
          <Button key="2" onClick={onClose}>
            Cancelar
          </Button>,
          <ButtonRed key="1" type="primary" onClick={handleFilter}>
            OK
          </ButtonRed>,
        ]}
      >
        <CheckBox
          items={itemsLocalMap}
          title="Sobre o local"
          setOptions={(value) => {
            setFilter([...filter, value]);
          }}
        />
        <CheckBox
          items={itemsVacancyMap}
          title="Sobre a vaga"
          setOptions={(value) => {
            setFilter([...filter, value]);
          }}
        />
        <div>Gênero: </div>
        <Select
          onChange={(value) => {
            setFilter([...filter, value]);
          }}
        >
          <Option value="FEMALE_GENDER">Feminino</Option>
          <Option value="MALE_GENDER">Masculino</Option>
          <Option value="none">Não especificado</Option>
        </Select>
      </Drawer>
    </>
  );
};

export default ShowDrawer;
