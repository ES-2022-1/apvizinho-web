import React from "react";

import { Select, InputNumber, Wrapper } from "./style.js";
import CheckboxComponent from "../CheckboxForm";
import { vacancyOptions } from "../../utils/utils.js";

const VacancyForm = ({ items, index, title, setOptions }) => {
  const checkListOptions = Object.keys(vacancyOptions).reduce((prev, curr) => {
    if (curr !== "price" && curr !== "gender")
      return { ...prev, [curr]: items[curr] };
    else return prev;
  }, {});

  return (
    <>
      <Wrapper>
        <CheckboxComponent
          items={checkListOptions}
          index={index}
          title={title}
          setOptions={setOptions}
        />
        <InputNumber
          min={0}
          addonBefore="R$"
          placeholder="Valor (ex: 200,00)"
          type="text"
          value={items["price"]}
          onChange={(value) => setOptions("price", value, index)}
        />
        <Select
          value={items["gender"]}
          onChange={(value) => setOptions("gender", value, index)}
        >
          <option value="" hidden>
            Gênero
          </option>
          <option value="FEMALE">Feminino</option>
          <option value="MALE">Masculino</option>
          <option value="UNKNOWN">Não especificado</option>
        </Select>
      </Wrapper>
    </>
  );
};

export default VacancyForm;
