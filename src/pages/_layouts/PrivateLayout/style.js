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
  overflow: auto;
`;

export const TitleDiv = styled.div`
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: #c51d0a;
  margin: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 2.5rem;
  /* height: 100%; */
  /* padding: 0 300px 0 300px; */
`;
