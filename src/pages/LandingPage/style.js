import styled from "styled-components";

const Wrapper = styled.div`
  width: 45vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  font-size: 100px;
  line-height: 40px;
  color: #443b57;
  margin: 6rem;
  margin-top: 135px;
  margin-bottom: 0.9em;
`;

const DivButtons = styled.div`
  display: flex;
`;

const Button = styled.button`
  height: 43px;
  width: 250px;
  border-radius: 2px;
  padding: 4px, 4px, 4px, 4px;
  color: #ffffff;
  background-color: #e34818;
  border: none;
  margin: 0 30px;
  cursor: pointer;
`;

const Subtitle = styled.h3`
  font-family: "League Spartan", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #443b57;
  margin: 4rem;
  margin-top: -2rem;
  padding-top: 10px;
  text-align: center;
`;

export { Wrapper, Title, Button, Subtitle, DivButtons };
