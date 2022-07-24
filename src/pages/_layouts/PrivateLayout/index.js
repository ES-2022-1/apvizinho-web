import React from "react";
import { Header, Layout, PageTitle } from "./style";
import { Button } from "antd";

const { Content } = Layout;

const PrivateLayout = ({ children, title }) => (
  <Layout>
    <Header>
      <h3>ApVizinho</h3>
      <Button>Meu perfil</Button>
    </Header>
    <Layout>
      <PageTitle>{title}</PageTitle>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default PrivateLayout;
