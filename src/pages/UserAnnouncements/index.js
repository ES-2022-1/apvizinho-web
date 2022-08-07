import { useState, useEffect } from "react";
import { Container, Wrapper, Button } from "./style";
import AnnouncementCard from "../../components/AnnouncementCard/index";
import { listAnnouncement } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export const UserAnnoucements = () => {
  const { user } = useAuth();
  const { userId } = useParams();
  const [announcements, setAnnouncements] = useState([]);

  const navigate = useNavigate();

  const navigateToCreateAnnouncement = () => {
    navigate("/newAnnouncement");
  };

  useEffect(() => {
    listAnnouncement().then((response) => {
      setAnnouncements(
        response.data.filter(({ id_user }) => id_user === userId)
      );
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Button onClick={navigateToCreateAnnouncement}>Novo anúncio</Button>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.title}
            canEdit={announcement.id_user === user.id_user}
            announcement={announcement}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
