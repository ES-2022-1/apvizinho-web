import styled from "styled-components";

import { DeleteTwoTone as DeleteAntd } from "@ant-design/icons";

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

export const DeleteTwoTone = styled(DeleteAntd)``;
