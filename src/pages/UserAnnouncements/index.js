import { useState, useEffect } from "react";
import { Container, Wrapper } from "./style";
import AnnouncementCard from "../../components/AnnouncementCard/index";
import { listAnnouncement } from "../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export const UserAnnoucements = () => {
  const { user } = useAuth();
  const { userId } = useParams();
  const [announcements, setAnnouncements] = useState([]);

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
