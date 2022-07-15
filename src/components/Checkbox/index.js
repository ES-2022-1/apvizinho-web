import { Col } from "antd";
import React from "react";
import { CheckboxList, Title, Checkbox } from "./style.js";

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

const CheckboxComponent = () => (
  <Checkbox.Group
    style={{
      width: "100%",
    }}
    onChange={onChange}
  >
    <CheckboxList>
      <Title>Sobre o local</Title>
      <Col span={8}>
        <Checkbox value="A">Próximo à universidade</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </CheckboxList>
  </Checkbox.Group>
);

export default CheckboxComponent;
