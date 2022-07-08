import { Layout } from "antd";
import React from "react";

const { Sider, Content } = Layout;

import { Header } from "./style";

const PublicLayout = ({ children }) => (
  <Layout>
    <Header>ApVizinho</Header>
    <Layout>
      <Sider>
        <img
          alt=""
          src="/home/drica/Documents/ufcg/es/frontend/public/undraw_house_searching_re_stk8 1.png"
        />
      </Sider>
      <Content>{children}</Content>
    </Layout>
  </Layout>
);

export default PublicLayout;
