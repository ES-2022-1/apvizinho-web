import { Layout } from "antd";
import React from "react";

const { Header, Content } = Layout;

const PublicLayout = ({ children }) => (
  <Layout>
    <Header>Header</Header>
    <Content>{children}</Content>
  </Layout>
);

export default PublicLayout;
