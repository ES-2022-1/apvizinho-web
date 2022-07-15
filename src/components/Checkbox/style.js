import styled from "styled-components";

const CheckboxList = styled.ul`
  width: 300px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

const CheckItem = styled.div`
  display: inline-block;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  font-family: "League Spartan", sans-serif;
  accent-color: #c51d0a;
  margin-right: 10px;
`;

const Label = styled.label`
  witdh: 500px;
  white-space: nowrap;
`;

const Title = styled.h1`
  font-family: "League Spartan", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #000000;
`;

export { CheckboxList, Title, Checkbox, CheckItem, Label };
