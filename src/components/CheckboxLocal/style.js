import styled from "styled-components";
import { Checkbox as CheckboxAntd } from "antd";

const CheckboxList = styled.div`
  width: 400px;
  background-color: yellow;
  margin: 1rem;
  .ant-checkbox-wrapper {
    border: black;
  }
`;

const Checkbox = styled(CheckboxAntd)`
  .ant-checkbox-input {
    background-color: #c51d0a;
  }
`;

//TODO
const Title = styled.title`
  position: absolute;
  width: 431px;
  height: 22.18px;
  left: 1000px;
  top: calc(50% - 22.18px / 2 - 248.91px);
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.85);
`;

export { Title, Checkbox, CheckboxList };
