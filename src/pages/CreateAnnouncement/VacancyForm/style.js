import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.select`
  width: 150px;
  height: 25px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 50px;
`;

const Input = styled.input`
  width: 150px;
  height: 25px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 50px;
  margin-bottom: 10px;
  ::placeholder {
    color: black;
  }
`;

export { Select, Input, Wrapper };
