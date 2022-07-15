import styled from "styled-components";

const Wrapper = styled.div`
  width: 45vw;
  height: 80vh;
  display: table-footer-group;
  vertical-align: middle;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  font-size: 100px;
  line-height: 40px;
  color: #000000;
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
  background-color: #c51d0a;
  border: none;
  margin: 0 30px;
  cursor: pointer;
`;

const Subtitle = styled.h3`
  font-family: "League Spartan", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  margin: 4rem;
  margin-top: -2rem;
  padding-top: 10px;
`;

export { Wrapper, Title, Button, Subtitle, DivButtons };
