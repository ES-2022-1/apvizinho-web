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
  height: 100vh;
  padding: 2%;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: #c51d0a;
  margin-left: 40px;
  margin-top: 30px;
`
