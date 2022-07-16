import React from "react";
import { Button, Input } from "antd";
import { Wrapper, Form } from "./style.js";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nome"
          name="nome"
          rules={[
            {
              required: true,
              message: "Insira seu nome.",
            },
          ]}
        >
          <Input placeholder="Nome" />
        </Form.Item>
        <Form.Item
          label="Telefone"
          name="telefone"
          rules={[
            {
              required: true,
              message: "Insira seu número de telefone",
            },
          ]}
        >
          <Input placeholder="Telefone" />
        </Form.Item>
        <Form.Item
          label="CPF"
          name="CPF"
          rules={[
            {
              required: true,
              message: "Insira seu CPF",
            },
          ]}
        >
          <Input placeholder="CPF" />
        </Form.Item>
        <Form.Item
          label="Data de Nascimento"
          name="data_nascimento"
          rules={[
            {
              required: true,
              message: "Insira sua data de nascimento",
            },
          ]}
        >
          <Input placeholder="Data de nascimento" />
        </Form.Item>
        <Form.Item
          label="Senha"
          name="senha"
          rules={[
            {
              required: true,
              message: "Insira sua senha",
            },
          ]}
        >
          <Input.Password placeholder="Senha" />
        </Form.Item>
        <Form.Item
          label="Confirmar Senha"
          name="confirmar_senha"
          rules={[
            {
              required: true,
              message: "Insira sua senha novamente",
            },
          ]}
        >
          <Input.Password placeholder="Confirmar senha" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
