import React from "react";
import { CheckboxList, Title, Checkbox, Label, CheckItem } from "./style.js";

let items = [
  "Proximo à universidade",
  "Proximo à ponto de ônibus",
  "Proximo à supermercado",
  "Mobiliado",
  "Internet",
  "Permitido pets",
  "Permitido eventos",
  "Gás encanando",
];

const CheckboxComponent = () => (
  <CheckboxList>
    <Title>Sobre o local</Title>
    {items.map((item, index) => {
      return (
        <CheckItem span={8} key={index}>
          <Checkbox id="a" />
          <Label htmlFor="a">{item}</Label>
        </CheckItem>
      );
    })}
  </CheckboxList>
);

export default CheckboxComponent;
