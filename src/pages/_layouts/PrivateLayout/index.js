import React from "react";
import { Header, Layout, PageTitle, Wrapper, TitleDiv } from "./style";
import { Divider } from "antd";
import ProfileButton from "./Button";

const { Content } = Layout;

const PrivateLayout = ({ children, title }) => (
  <Layout>
    <Header>
      <h3>ApVizinho</h3>
      <ProfileButton />
    </Header>
    <Layout>
      <Wrapper>
        <TitleDiv>
          <PageTitle>{title}</PageTitle>
        </TitleDiv>
        <Divider />
        <Content>{children}</Content>
      </Wrapper>
    </Layout>
  </Layout>
);

export default PrivateLayout;
