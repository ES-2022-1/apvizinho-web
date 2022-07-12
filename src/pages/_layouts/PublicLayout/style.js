import { Layout as LayoutAntd } from "antd";

import styled from "styled-components";

const { Header: HeaderAntd, Sider: SiderAntd, Footer: FooterAntd } = LayoutAntd;

export const Layout = styled(LayoutAntd)`
  background: #f5f5f5;
  &#main-layout {
    height: 100vh;
  }
`;

export const Sider = styled(SiderAntd)`
  background-color: transparent;
  background-image: url("sider.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
`;

export const Header = styled(HeaderAntd)`
  background: transparent;
`;

export const Footer = styled(FooterAntd)`
  background-color: transparent;
  background-image: url("vector.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 15%;
`;
