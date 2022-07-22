import styled from "styled-components";
import {
  Select as SelectAntd,
  Drawer as DrawerAntd,
  Button as ButtonAntd,
} from "antd";

const Select = styled(SelectAntd)`
  width: 209px;
  padding-left: 10px;
`;

const Drawer = styled(DrawerAntd)`
  display: flex;
`;

const ButtonRed = styled(ButtonAntd)`
  background-color: #c51d0a;
  border: none;
  &:hover {
    background-color: red !important;
  }
`;

export { Select, Drawer, ButtonRed };
