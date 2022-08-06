import styled from "styled-components";
import { Carousel as CarouselAtnd, Button as ButtonAntd } from "antd";

export const Carousel = styled(CarouselAtnd)``;

export const CarouselImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  display: flex !important;
  justify-content: center;
  background-color: #f5f5f5;
  align-content: center;
  width: 100%;
  height: 330px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WrapperCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;

export const WrapperUserInfo = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperUserInfoSecondary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const WrapperUserInfoPrimary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;
export const WrapperUserInfoColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 23px;
  font-weight: normal;
  margin-bottom: 30px;
  align-self: self-start;
  padding: 0 4rem;
  &.vacancy-price {
    align-self: self-end;
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 60px;
`;
export const ListItem = styled.p`
  font-size: 18px;
  font-weight: light;
  margin-bottom: 5px;
  /* display: flex; */
  align-self: flex-start;
  padding: 0 4rem;
  span.option {
    margin-left: 1rem;
  }
`;

export const Button = styled(ButtonAntd)`
  float: right;
  background-color: #c51d0a;
  color: white;
  &:hover {
    background-color: red !important;
    color: white;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 30px;
`;
