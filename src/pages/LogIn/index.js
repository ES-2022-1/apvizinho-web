import React from "react";
import { Button, Input } from "antd";
import { Wrapper, Form, Link } from "./style.js";

const LogIn = () => {
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
          label="E-mail"
          name="Email"
          rules={[
            {
              required: true,
              message: "Insira seu e-mail.",
            },
          ]}
        >
          <Input placeholder="Email" />
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Fazer Login
          </Button>
        </Form.Item>
      </Form>
      <Link href="/signup">Esqueci minha senha</Link>
    </Wrapper>
  );
};

export default LogIn;
