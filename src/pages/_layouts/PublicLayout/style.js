import { Layout as LayoutAntd } from "antd";

import styled from "styled-components";

const { Header: HeaderAntd, Sider: SiderAntd } = LayoutAntd;

export const Layout = styled(LayoutAntd)`
  background: #f5f5f5;
`;

export const Sider = styled(SiderAntd)`
  background-color: transparent;
  background-image: url("sider.png");
  background-repeat: no-repeat;
`;

export const Header = styled(HeaderAntd)`
  // width: 100%;
  background: transparent;
`;
