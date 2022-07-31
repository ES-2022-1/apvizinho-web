import styled from "styled-components";
import { Button as ButtonAntd, Form as FormAntd } from "antd";

export const Wrapper = styled.div`
  display: flex;
  gap: 4.75rem;
  /* justify-content: space-between; */
  /* margin-left: 40px; */
`;

export const VacancyForm = styled(FormAntd)`
  display: flex;
  flex-direction: column;
  /* .ant-form-item-control {
    width: 100%;
  } */
`;

export const AddressForm = styled(FormAntd)`
  display: flex;
  flex-direction: column;
`;

export const RowItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
`;

export const Button = styled(ButtonAntd)`
  background-color: #c51d0a;
  border-color: transparent;
`;
