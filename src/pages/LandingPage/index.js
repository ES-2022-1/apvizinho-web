import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Title, Button, Subtitle, DivButtons } from "./style.js";

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateLogIn = () => {
    navigate("/login");
  };

  const navigateSignUp = () => {
    navigate("/signup");
  };

  return (
    <Wrapper>
      <Title>ApVizinho</Title>
      <Subtitle>INSERIR TEXTINHO BONITINHO</Subtitle>
      <DivButtons>
        <Button type="primary" htmlType="button" onClick={navigateLogIn}>
          Fazer Login
        </Button>
        <Button type="primary" htmlType="button" onClick={navigateSignUp}>
          Cadastrar
        </Button>
      </DivButtons>
    </Wrapper>
  );
};

export default LandingPage;
