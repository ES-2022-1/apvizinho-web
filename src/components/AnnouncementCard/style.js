import styled from "styled-components";

import { Card as CardAntd } from "antd";

export const Card = styled(CardAntd)`
  cursor: default;
  #card-cover {
    border: 1px solid #f0f0f0;
  }
`;

export const CardLink = styled.a`
  color: red;
  text-decoration: none;
  &:hover {
    color: red !important;
  }
`;
