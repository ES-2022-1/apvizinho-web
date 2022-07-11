import React from "react";
import {
  Wrapper,
  Title,
  Button,
  Footer,
  Subtitle,
  DivButtons,
} from "./style.js";

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
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
