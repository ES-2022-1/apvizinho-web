import styled from "styled-components";
import { Carousel as CarouselAtnd } from "antd";

export const  Carousel = styled(CarouselAtnd)`
`;

export const CarouselImage = styled.img`
    display: flex;
    width: 100%;
    height: 330px;
    justify-content: center;
    align-items: center;
`

export const CarouselContainer = styled.div`
  display: flex !important;
  justify-content: center;
  background-color: hotpink;
  align-content: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 200px 0 200px;
`

export const WrapperCarousel = styled.div`
    width: 100%;
    height: 100%;
    display: block;
`

export const WrapperUserInfo = styled.div`
    margin-top: 30px;
    width: 80%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const WrapperUserInfoSecondary = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ProfileImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`

export const WrapperUserInfoPrimary = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`
export const WrapperUserInfoColumn = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 23px;
    font-weight: normal;
    margin-bottom: 30px;
`
export const ListItem = styled.p`
    font-size: 18px;
    font-weight: light;
    margin-bottom: 5px;
`



