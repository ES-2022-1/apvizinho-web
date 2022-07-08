import { Layout as LayoutAntd } from "antd";

import styled from "styled-components";

const { Header: HeaderAntd } = LayoutAntd;

export const Layout = styled(LayoutAntd)`
  background: #f5f5f5;
`;

export const Header = styled(HeaderAntd)`
  // width: 100%;
  background: transparent;
`;
