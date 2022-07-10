import styled from "styled-components";
import { Layout as LayoutAntd } from "antd";

const { Footer: FooterAntd } = LayoutAntd;

const Footer = styled(FooterAntd)`
  background-color: #f5f5f5;
  background-image: url("vector.png");
  background-repeat: no-repeat;
  width: 105%;
  position: absolute;
  background-size: 100%;
  left: -5%;
  right: -3%;
  top: 84.08%;
  bottom: 0%;
`;

const Wrapper = styled.div`
  width: 45vw;
  height: 80vh;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "League Spartan";
  font-weight: 400;
  font-size: 100px;
  line-height: 40px;
  color: #000000;
  margin: 4rem;
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
`;

const Subtitle = styled.h3`
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  margin: 4rem;
`;

export { Footer, Wrapper, Title, Button, Subtitle };
