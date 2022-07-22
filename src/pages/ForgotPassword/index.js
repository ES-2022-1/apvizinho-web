import React from "react";
import { Button, Input } from "antd";
import { Wrapper, Form, Link, Instruction } from "./style.js";

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Wrapper>
      <Instruction>
        Insira seu e-mail e enviaremos um link para que você possa voltar a
        acessar sua conta
      </Instruction>
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar e-mail de recuperação de senha
          </Button>
        </Form.Item>
      </Form>
      <Link href="/login">Voltar ao login</Link>
    </Wrapper>
  );
};

export default ForgotPassword;
