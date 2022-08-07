import React from "react";
import {
  Header,
  Layout,
  PageTitle,
  Wrapper,
  TitleDiv,
  BackArrow,
  ArrowContainer,
} from "./style";
import { Divider } from "antd";
import ProfileButton from "./Button";
const { Content } = Layout;
import { useNavigate } from "react-router-dom";

const PrivateLayout = ({ children, title, showBackArrow = true }) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header>
        <h3>ApVizinho</h3>
        <ProfileButton />
      </Header>
      <Layout>
        <Wrapper>
          <TitleDiv>
            {showBackArrow && (
              <ArrowContainer
                onClick={() => {
                  navigate(-1);
                }}
              >
                <BackArrow />
              </ArrowContainer>
            )}
            <PageTitle>{title}</PageTitle>
          </TitleDiv>
          <Divider />
          <Content>{children}</Content>
        </Wrapper>
      </Layout>
    </Layout>
  );
};

export default PrivateLayout;
