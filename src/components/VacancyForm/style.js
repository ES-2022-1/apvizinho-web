import styled from "styled-components";

import { Select as SelectAntd, InputNumber as InputNumberAntd } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled(SelectAntd)`
  width: 150px;
  padding-left: 5px;
  margin-left: 50px;
  /* height: 25px;
  background: white;
  color: gray;
  font-size: 14px;
  border: none; */
`;

const InputNumber = styled(InputNumberAntd)`
  width: 150px;
  margin-bottom: 10px;
  &.ant-input-number-group-wrapper {
    padding-left: 5px;
    margin-left: 50px;
  }
  /* height: 25px;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;
  ::placeholder {
    color: black;
  } */
`;

export { Select, InputNumber, Wrapper };
