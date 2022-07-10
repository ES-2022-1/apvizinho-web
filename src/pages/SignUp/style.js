import { Form as FormAntd } from "antd";

import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1rem;
  height: 100%;
  overflow: scroll;
`;

export const Form = styled(FormAntd)`
  max-width: 29.75rem;
  .ant-btn-primary {
    width: 100%;
    border-color: #c51d0a;
    background: #c51d0a;
  }
`;
