import styled from "styled-components";
import { Button as ButtonAntd } from "antd";

export const PhotoDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  max-height: 100vh;
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
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const InfoItemDiv = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const ButtonRed = styled(ButtonAntd)`
  background-color: #c51d0a;
  width: 100%;
  border: none;
  margin-bottom: 10px;
  color: white;
  &:hover {
    background-color: red !important;
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
  width: 100%;
`;
