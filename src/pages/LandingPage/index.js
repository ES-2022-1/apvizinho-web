import React from "react";
import { Wrapper, Title, Button, Footer, Subtitle } from "./style.js";

const LandingPage = () => {
  return (
    <Wrapper>
      <Title>ApVizinho</Title>
      <Subtitle>INSERIR TEXTINHO BONITINHO</Subtitle>
      <Button type="primary" htmlType="button">
        Fazer Login
      </Button>
      <Button type="primary" htmlType="button">
        Cadastrar
      </Button>
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
