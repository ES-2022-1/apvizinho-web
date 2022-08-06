import { useState, useEffect } from "react";
import { Container, Wrapper } from "./style";
import AnnouncementCard from "../../components/AnnouncementCard/index";
import { listAnnouncement } from "../../services/api";
import { useParams } from "react-router-dom";

export const UserAnnoucements = () => {
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
            announcement={announcement}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
