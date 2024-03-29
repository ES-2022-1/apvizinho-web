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
      <Subtitle>
        Aqui você encontra as melhores oportunidades de divisão de moradia na
        sua cidade de forma rápida e simples
      </Subtitle>
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
