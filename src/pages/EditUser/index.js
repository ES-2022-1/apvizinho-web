import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { editUser } from "../../services/api.js";
import { useNavigate } from "react-router-dom";

import {
  PhotoDiv,
  Wrapper,
  ProfileImage,
  ButtonRed,
  InfoDiv,
  InfoItemDiv,
  Input,
  ItemTitle,
  MyAnnouncementsButton,
  BioInput,
} from "./style.js";

const EditUser = () => {
  const navigate = useNavigate();

  const navigateToLoadUser = () => {
    navigate("/profile");
  };

  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user.firstname);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const [surname, setSurname] = useState(user.surname);
  const [birthdate, setBirthdate] = useState(user.birthdate);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleSubmit = async () => {
    const userId = user.id_user;
    const payload = {
      firstname: name,
      surname: surname,
      email: email,
      cellphone: user.cellphone,
      birthdate: user.birthdate,
      document: user.document,
      already_reviewed: user.already_reviewed,
      bio: bio,
      profile_image: user.profile_image,
    };

    const response = await editUser({ payload, userId });
    updateUser(response.data);

    navigateToLoadUser();
  };

  return (
    <Wrapper>
      <PhotoDiv>
        <ProfileImage
          alt="profile-image"
          src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
        />
        <ButtonRed>Fazer upload</ButtonRed>
        <MyAnnouncementsButton onClick={handleSubmit}>
          Salvar alterações
        </MyAnnouncementsButton>
      </PhotoDiv>
      <InfoDiv>
        <InfoItemDiv>
          <ItemTitle>Nome</ItemTitle>
          <Input type="text" onChange={handleNameChange} value={name} />
        </InfoItemDiv>
        <InfoItemDiv>
          <ItemTitle>Email</ItemTitle>
          <Input type="text" onChange={handleEmailChange} value={email} />
        </InfoItemDiv>
        <InfoItemDiv>
          <ItemTitle>Bio</ItemTitle>
          <BioInput type="text" onChange={handleBioChange} value={bio} />
        </InfoItemDiv>
      </InfoDiv>
      <InfoDiv>
        <InfoItemDiv>
          <ItemTitle>Sobrenome</ItemTitle>
          <Input type="text" onChange={handleSurnameChange} value={surname} />
        </InfoItemDiv>
        <InfoItemDiv>
          <ItemTitle>Data de nascimento</ItemTitle>
          <Input
            type="text"
            onChange={handleBirthdateChange}
            value={birthdate}
          />
        </InfoItemDiv>
      </InfoDiv>
    </Wrapper>
  );
};

export default EditUser;
