import React from "react";
import { Button, Input } from "antd";
import { Wrapper, Form, Link } from "./style.js";
import { login } from "../../services/api.js";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log(values);

    login(values)
      .then(({ data }) => {
        sessionStorage.setItem("access_token", data.access_token);
        navigate("/announcements", { replace: true });
      })
      .catch((err) => console.log(err));
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
      <Link href="/forgotPassword">Esqueci minha senha</Link>
    </Wrapper>
  );
};

export default LogIn;
