import { Drawer, Space } from "antd";
import { ButtonRed, Select } from "./style";
import React, { useState } from "react";
import CheckBox from "../../../components/CheckboxFilter";
import { Option } from "antd/lib/mentions";

const ShowDrawer = () => {
  const itemsLocal = {
    IS_CLOSE_TO_UNIVERSITY: "Proximo à universidade",
    IS_CLOSE_TO_SUPERMARKET: "Proximo à supermercado",
    HAS_FURNITURE: "Mobiliado",
    HAS_INTERNET: "Internet",
    ALLOW_PETS: "Permitido pets",
    ALLOW_EVENTS: "Permitido eventos",
    ALLOWED_SMOKER: "Permitido fumantes",
    HAS_PIPED_GAS: "Gás encanando",
  };

  const itemsVacancy = {
    HAS_BATHROOM: "Suíte",
    IS_SHARED_ROOM: "Quarto compartilhado",
    REQUIRED_EXTROVERTED_PERSON: "Pessoa extrovertida",
    REQUIRED_ORGANIZED_PERSON: "Pessoa organizada",
  };

  const [filterOptions, setFilterOptions] = useState([]);
  const [gender, setGender] = useState("");

  const filters = () => {
    return [...filterOptions, gender];
  };

  console.log(filters());

  const handleAddFilter = (filterOption) => {
    setFilterOptions([...filterOptions, filterOption]);
  };

  const handleRemoveFilter = (filterOption) => {
    const updatedOptions = filterOptions.filter(
      (elem) => elem !== filterOption
    );
    setFilterOptions(updatedOptions);
  };

  const alreadyFiltered = (filterOption) => {
    return filterOptions.includes(filterOption);
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
          <ButtonRed key="1" type="primary">
            OK
          </ButtonRed>,
        ]}
      >
        <CheckBox
          items={itemsLocal}
          title="Sobre o local"
          handleAddFilter={handleAddFilter}
          handleRemoveFilter={handleRemoveFilter}
          alreadyFiltered={alreadyFiltered}
        />
        <CheckBox
          items={itemsVacancy}
          title="Sobre a vaga"
          handleAddFilter={handleAddFilter}
          handleRemoveFilter={handleRemoveFilter}
          alreadyFiltered={alreadyFiltered}
        />
        <div>Gênero: </div>
        <Select
          onChange={(value) => {
            setGender(value);
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
