// import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import {
  PhotoDiv,
  Wrapper,
  ProfileImage,
  ButtonRed,
  InfoDiv,
  InfoItemDiv,
  Text,
  ItemTitle,
  MyAnnouncementsButton,
} from "./style.js";

const LoadUser = () => {
  const navigate = useNavigate();

  const navigateToEditProfile = () => {
    navigate("/editUser");
  };
  const { user } = useAuth();

  return (
    <Wrapper>
      <PhotoDiv>
        <ProfileImage
          alt="profile-image"
          src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
        />
        <ButtonRed>Fazer upload</ButtonRed>
        <MyAnnouncementsButton onClick={navigateToEditProfile}>
          Editar perfil
        </MyAnnouncementsButton>
      </PhotoDiv>
      <InfoDiv>
        <InfoItemDiv>
          <ItemTitle>Nome</ItemTitle>
          <Text>{user.firstname}</Text>
        </InfoItemDiv>
        <InfoItemDiv>
          <ItemTitle>Email</ItemTitle>
          <Text>{user.email}</Text>
        </InfoItemDiv>
        <InfoItemDiv>
          <ItemTitle>Bio</ItemTitle>
          <Text>{user.bio}</Text>
        </InfoItemDiv>
      </InfoDiv>
      <InfoDiv>
        <InfoItemDiv>
          <ItemTitle>Sobrenome</ItemTitle>
          <Text>{user.surname}</Text>
        </InfoItemDiv>
        <InfoItemDiv>
          <ItemTitle>Data de nascimento</ItemTitle>
          <Text>{user.birthdate}</Text>
        </InfoItemDiv>
      </InfoDiv>
    </Wrapper>
  );
};

export default LoadUser;
