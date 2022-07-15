import styled from "styled-components";
import { Checkbox as CheckboxAntd } from "antd";

const CheckboxList = styled.div`
  width: 400px;
  background-color: yellow;
  margin: 1rem;
  display: inline-block;
`;

const Checkbox = styled(CheckboxAntd)`
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  font-size: 14px;
  width: 900px;
  white-space: nowrap;
  text-align: center;
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: red;
    border-color: red;
  }
`;

const Title = styled.h1`
  font-family: "League Spartan", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
`;

export { CheckboxList, Title, Checkbox };
