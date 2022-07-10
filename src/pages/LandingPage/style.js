import styled from "styled-components";
import { Layout as LayoutAntd } from "antd";

const { Footer: FooterAntd } = LayoutAntd;

const Footer = styled(FooterAntd)`
  background-color: #c51d0a;
  background-image: url("vector.png");
  background-repeat: no-repeat;
  margin: 3rem;
  position: absolute;
  left: -5%;
  right: -3%;
  top: 84.08%;
  bottom: 0%;
`;

const Wrapper = styled.div`
  margin: 1rem;
`;

const Title = styled.h1`
  width: 445px;
  height: 67px;
  margin-top: 100px;
  margin-left: 100px;
  font-family: "League Spartan";
  font-weight: 400;
  font-size: 100px;
  line-height: 40px;
  color: #000000;
`;

const Button = styled.button`
  height: 43px;
  width: 250px;
  left: 1076px;
  top: 586px;
  border-radius: 2px;
  padding: 4px, 4px, 4px, 4px;
  color: #ffffff;
  background-color: #c51d0a;
  margin: 0 30px;
`;

const Paragraph = styled.div`
  height: 62px;
  left: 632px;
  top: 464px;
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #000000;
  padding: 10px 40px 120px 50px;
`;

export { Footer, Wrapper, Title, Button, Paragraph };
