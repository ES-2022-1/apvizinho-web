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

const Button = styled(ButtonAntd)``;

export { Select, Drawer, Button };
