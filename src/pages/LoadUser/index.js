import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/api";
import { notification } from "antd";

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
  const [name, setName] = useState(user.firstname);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const [surname, setSurname] = useState(user.surname);
  const [birthdate, setBirthdate] = useState(user.birthdate);

  useEffect(() => {
    getUser(user.id_user)
      .then((response) => {
        setName(response.data.firstname);
        setBio(response.data.bio);
        setSurname(response.data.surname);
        setEmail(response.data.email);
        setBirthdate(response.data.birthdate);
      })
      .catch((err) =>
        notification.error({
          message: err,
        })
      );
  }, []);

  return (
    <Wrapper>
      <PhotoDiv>
        <ProfileImage
          alt="profile-image"
          src={user.profile_image || "image_fault.png"}
        />
        <ButtonRed
          onClick={() => navigate(`../userAnnouncements/${user.id_user}`)}
        >
          Meus anúncios
        </ButtonRed>
        <MyAnnouncementsButton onClick={navigateToEditProfile}>
          Editar perfil
        </MyAnnouncementsButton>
      </PhotoDiv>
      <InfoDiv>
        <InfoItemDiv>
          <ItemTitle>Nome</ItemTitle>
          <Text>{name}</Text>
        </InfoItemDiv>
        <InfoItemDiv>
          <ItemTitle>Email</ItemTitle>
          <Text>{email}</Text>
        </InfoItemDiv>
        <InfoItemDiv>
          <ItemTitle>Bio</ItemTitle>
          <Text>{bio}</Text>
        </InfoItemDiv>
      </InfoDiv>
      <InfoDiv>
        <InfoItemDiv>
          <ItemTitle>Sobrenome</ItemTitle>
          <Text>{surname}</Text>
        </InfoItemDiv>
        <InfoItemDiv>
          <ItemTitle>Data de nascimento</ItemTitle>
          <Text>{birthdate}</Text>
        </InfoItemDiv>
      </InfoDiv>
    </Wrapper>
  );
};

export default LoadUser;
