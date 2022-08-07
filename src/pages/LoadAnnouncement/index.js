import React, { useEffect, useRef, useState } from "react";
import { Avatar, notification, Spin } from "antd";
import { useParams } from "react-router-dom";
import { getAnnouncement } from "../../services/api";
import { UserOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";
import {
  Carousel,
  WrapperCarousel,
  Wrapper,
  WrapperUserInfo,
  WrapperUserInfoSecondary,
  CarouselContainer,
  CarouselImage,
  WrapperUserInfoPrimary,
  WrapperUserInfoColumn,
  Title,
  ListItem,
  TitleDiv,
  Button,
  ButtonDiv,
} from "./style";
import {
  extractLocalOptions,
  extractVacancyOptions,
  localOptions,
  vacancyOptions,
} from "../../utils/utils";
import { useAuth } from "../../hooks/auth";

export const LoadAnnouncement = () => {
  const ref = useRef();

  const { user } = useAuth();

  const { announcementId } = useParams();

  const [announcement, setAnnouncement] = useState(undefined);

  const announcementTitle = {
    color: "#e34818",
    fontSize: "30px",
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const getAnnouncerLink = () => {
    const link = `https://api.whatsapp.com/send?phone=55${announcement.user.cellphone}&text=Ol%C3%A1%2C%20Venho%20pelo%20ApVizinho.%20Gostaria%20de%20conversar%20sobre%20o%20anuncio%20${announcement.title}`;

    return link;
  };

  useEffect(() => {
    getAnnouncement(announcementId)
      .then((response) => {
        setAnnouncement(response.data);
      })
      .catch((err) =>
        notification.error({
          message: err,
        })
      );
  }, []);

  return (
    <>
      {announcement && user ? (
        <Wrapper>
          <TitleDiv>
            <h1 style={announcementTitle}>{announcement.title}</h1>
          </TitleDiv>
          <WrapperCarousel>
            <Carousel ref={ref} afterChange={onChange}>
              {announcement.images_url ? (
                announcement.images_url.map((url, index) => (
                  <CarouselContainer key={`image-${index}`}>
                    <CarouselImage src={url} />
                  </CarouselContainer>
                ))
              ) : (
                <CarouselContainer>
                  <CarouselImage src="/image_fault.png" />
                </CarouselContainer>
              )}
            </Carousel>
          </WrapperCarousel>
          <WrapperUserInfo>
            <WrapperUserInfoSecondary>
              <Avatar size={64} icon={<UserOutlined />} />
              <h1>{`Anunciado por ${user.firstname} ${user.surname}`}</h1>
            </WrapperUserInfoSecondary>
          </WrapperUserInfo>
          <WrapperUserInfoPrimary>
            <WrapperUserInfoColumn>
              <Title>Sobre o local</Title>
              {Object.keys(extractLocalOptions(announcement)).map((key) => (
                <ListItem key={key}>
                  {announcement[key] ? <CheckOutlined /> : <CloseOutlined />}
                  <span className="option">{localOptions[key]}</span>
                </ListItem>
              ))}
            </WrapperUserInfoColumn>
            <WrapperUserInfoColumn>
              {announcement.vacancies.map((vacancy, index) => (
                <React.Fragment key={index}>
                  <Title>{`Sobre a vaga ${index + 1}`}</Title>
                  <Title className="vacancy-price">{`R$ ${vacancy.price}/mês`}</Title>
                  {Object.keys(extractVacancyOptions(vacancy))
                    .filter((key) => key !== "gender" && key !== "price")
                    .map((key) => (
                      <ListItem key={key}>
                        {vacancy[key] ? <CheckOutlined /> : <CloseOutlined />}
                        <span className="option">{vacancyOptions[key]}</span>
                      </ListItem>
                    ))}
                </React.Fragment>
              ))}
            </WrapperUserInfoColumn>
            <WrapperUserInfoColumn>
              <Title>Descrição</Title>
              <ListItem>{announcement.description}</ListItem>
            </WrapperUserInfoColumn>
          </WrapperUserInfoPrimary>
          <ButtonDiv href={getAnnouncerLink()}>
            <Button>Entrar em contato com anunciante</Button>
          </ButtonDiv>
        </Wrapper>
      ) : (
        <Spin />
      )}
    </>
  );
};
