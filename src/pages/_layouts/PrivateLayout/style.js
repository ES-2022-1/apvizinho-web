import { Layout as LayoutAntd } from "antd";
import styled from "styled-components";
const { Header: HeaderAntd } = LayoutAntd;

export const Header = styled(HeaderAntd)`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Layout = styled(LayoutAntd)`
  background: #f5f5f5;
`;
