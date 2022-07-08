import React from "react";
import { Header, Layout, Sider } from "./style";

const { Content } = Layout;


const PublicLayout = ({ children }) => (
  <Layout>
    <Header>ApVizinho</Header>
    <Layout>
      <Sider width='50%'/>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default PublicLayout;
