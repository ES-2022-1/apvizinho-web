import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
  const navigate = useNavigate();

  const navigateToUserProfile = () => {
    navigate("/profile");
  };

  return <Button onClick={navigateToUserProfile}>Meu perfil</Button>;
};

export default ProfileButton;
