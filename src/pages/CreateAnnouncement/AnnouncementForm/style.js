import styled from "styled-components";
import { Button as ButtonAntd, Form as FormAntd } from "antd";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
`;

export const VacancyForm = styled(FormAntd)`
  display: flex;
  flex-direction: column;
`;

export const AddressForm = styled(FormAntd)`
  display: flex;
  flex-direction: column;
`;

export const RowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
`;

export const Button = styled(ButtonAntd)`
  background-color: #c51d0a;
  border-color: transparent;
`;
