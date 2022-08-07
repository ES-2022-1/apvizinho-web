import { Form as FormAntd } from "antd";

import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1rem;
  height: 100%;
  width: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Link = styled.a`
  color: #e34818;
  text-decoration: underline;
`;

export const Form = styled(FormAntd)`
  max-width: 35rem;
  min-width: 30.75rem;
  .ant-btn-primary {
    width: 100%;
    border-color: #e34818;
    background: #e34818;
  }
`;

export const Instruction = styled.h3`
  text-align: center;
  width: 32.25rem;
`;
