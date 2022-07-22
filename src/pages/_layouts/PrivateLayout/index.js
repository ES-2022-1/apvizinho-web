import React from "react";
import { Header, Layout } from "./style";
import { Button } from "antd";

const { Content } = Layout;

const PrivateLayout = ({ children }) => (
  <Layout>
    <Header>
      <h3>ApVizinho</h3>
      <Button>Meu perfil</Button>
    </Header>
    <Layout>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default PrivateLayout;
