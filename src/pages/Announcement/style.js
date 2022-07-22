import styled from 'styled-components';
import { Button as ButtonAntd, Form as FormAntd } from "antd";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
`;

export const VacancyForm = styled(FormAntd)`
    width: 40%;
    display: flex;
    flex-direction: column;
`;

export const AddressForm = styled(FormAntd)`
    width: 40%;
    display: flex;
    flex-direction: column;
`;

export const RowItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
`

export const Button = styled(ButtonAntd)`
    background-color: #C51D0A;
    border-color: transparent;
`;