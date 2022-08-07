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
import { Divider, Button } from "antd";
import ProfileButton from "./Button";
const { Content } = Layout;
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";

const PrivateLayout = ({ children, title, showBackArrow = true }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    signOut();
    navigate("/login");
  };

  return (
    <Layout>
      <Header>
        <h3>ApVizinho</h3>
        <div className="header-buttons">
          <Button onClick={handleClick}>Sign out</Button>
          <ProfileButton />
        </div>
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
