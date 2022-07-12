import React from "react";
import { Header, Layout, Sider, Footer } from "./style";

const { Content } = Layout;

const PublicLayout = ({ children }) => (
  <Layout id="main-layout">
    <Header>ApVizinho</Header>
    <Layout>
      <Sider
        width="50%"
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      />
      <Content>{children}</Content>
    </Layout>
    <Footer />
  </Layout>
);

export default PublicLayout;
