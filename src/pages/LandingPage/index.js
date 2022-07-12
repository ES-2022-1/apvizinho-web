import React from "react";
import { Wrapper, Title, Button, Subtitle, DivButtons } from "./style.js";

const LandingPage = () => {
  return (
    <Wrapper>
      <Title>ApVizinho</Title>
      <Subtitle>INSERIR TEXTINHO BONITINHO</Subtitle>
      <DivButtons>
        <Button type="primary" htmlType="button">
          Fazer Login
        </Button>
        <Button type="primary" htmlType="button">
          Cadastrar
        </Button>
      </DivButtons>
    </Wrapper>
  );
};

export default LandingPage;
