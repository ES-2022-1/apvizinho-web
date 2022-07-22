import styled from "styled-components";
import { Button as ButtonAntd } from "antd";

export const H1 = styled.h1`
  color: #c51d0a;
  font-weight: 500;
  font-size: 30px;
  margin-left: 43px;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const FormDiv = styled.div`
  width: 60%;
  height: 100%;
`;

export const CheckDiv = styled.div`
  width: 30%;
  height: 100%;
`;
export const UploadDiv = styled.div`
  margin-left: 50px;
  margin-top: 50px;
  max-width: 25rem;
`;

export const Button = styled(ButtonAntd)`
  background-color: #c51d0a;
  color: white;
  width: 150px;
  margin-left: 15rem;
  margin-top: 150px;
  border: none;
  &:hover {
    background-color: red !important;
    color: white;
  }
`;
