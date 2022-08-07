import styled from "styled-components";
import { Button as ButtonAntd } from "antd";

export const PhotoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 80px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const InfoDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const InfoItemDiv = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const ButtonRed = styled(ButtonAntd)`
  background-color: #e34818;
  width: 350px;
  border: none;
  margin-bottom: 10px;
  color: white;
  &:hover {
    background-color: #e19877 !important;
    color: white;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  color: #a9a9a9;
`;

export const ItemTitle = styled.h2`
  font-size: 25px;
`;

export const MyAnnouncementsButton = styled(ButtonAntd)`
  width: 350px;
`;
