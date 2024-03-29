import styled from "styled-components";

import { DeleteTwoTone as DeleteAntd } from "@ant-design/icons";

import { Card as CardAntd } from "antd";

export const Card = styled(CardAntd)`
  cursor: default;
  height: 460px;
  #card-cover {
    border: 1px solid #f0f0f0;
  }
  .ant-card-cover {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
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
