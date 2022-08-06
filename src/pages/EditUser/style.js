import styled from "styled-components";
import { Button as ButtonAntd, Image } from "antd";

export const PhotoDiv = styled.div`
  width: 90%;
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

export const ProfileImage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const InfoDiv = styled.div`
  margin-top: 100px;
  width: 90%;
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
  width: 350px;
  border: none;
  margin-bottom: 10px;
  color: white;
  &:hover {
    background-color: red !important;
    color: white;
  }
`;

export const Input = styled.input`
  font-size: 17px;
  border-radius: 4px;
  border: 1px solid #bcbdbf;
  width: 350px;
  ::placeholder {
    margin-left: 20px;
  }
`;

export const BioInput = styled.input`
  text-align: start;
  font-size: 17px;
  width: 350px;
  border-radius: 4px;
  border: 1px solid #bcbdbf;
  padding: 0 0 50px 0;
  ::placeholder {
    margin-left: 20px;
  }
`;

export const ItemTitle = styled.h2`
  font-size: 25px;
`;

export const MyAnnouncementsButton = styled(ButtonAntd)`
  width: 350px;
`;
