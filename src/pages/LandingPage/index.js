import React from "react";
import { Wrapper, Title, Button, Paragraph, Footer } from "./style.js";

const LandingPage = () => {
  return (
    <Wrapper>
      <Title>ApVizinho</Title>
      <Paragraph>INSERIR TEXTINHO BONITINHO</Paragraph>
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
