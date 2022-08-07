import { Layout as LayoutAntd } from "antd";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Header: HeaderAntd } = LayoutAntd;

export const Header = styled(HeaderAntd)`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #443b57;
  font-size: 20px;
  .header-buttons {
    button {
      margin-left: 1rem;
    }
  }
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
`;
export const BackArrow = styled(ArrowLeftOutlined)`
  font-size: 20px;
  margin-right: 15px;
`;

export const Layout = styled(LayoutAntd)`
  background: #fff;
  height: 100vh;
  overflow: auto;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-size: 30px;
  margin-left: 50px;
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
