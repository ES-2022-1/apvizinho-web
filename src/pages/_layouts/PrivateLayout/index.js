import { Layout } from "antd";
import React from "react";

const { Header, Content } = Layout;

const PrivateLayout = ({ children }) => (
  <Layout>
    <Header>Header</Header>
    <Content>{children}</Content>
  </Layout>
);

export default PrivateLayout;
