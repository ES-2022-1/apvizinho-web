import { Layout as LayoutAntd } from "antd";
import styled from "styled-components";
const { Header: HeaderAntd } = LayoutAntd;

export const Header = styled(HeaderAntd)`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #443b57;
  font-size: 20px;
`;

export const Layout = styled(LayoutAntd)`
  background: #fff;
  height: 100vh;
  overflow: auto;
`;

export const TitleDiv = styled.div`
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: #e34818;
  margin: 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 2.5rem;
  /* height: 100%; */
  /* padding: 0 300px 0 300px; */
`;
