import React, { useCallback } from "react";
import { Button, Input } from "antd";
import { Wrapper, Form } from "./style.js";
import { useAuth } from "../../hooks/auth.js";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (values) => {
    await signIn(values);
    navigate("/announcements");
  });

  return (
    <Wrapper>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="E-mail"
          name="email"
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
          name="password"
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
    </Wrapper>
  );
};

export default LogIn;
