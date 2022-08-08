import { useState, useEffect } from "react";
import { Container, Wrapper, Button, ButtonDiv } from "./style";
import AnnouncementCard from "../../components/AnnouncementCard/index";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import {
  activateAnnouncement,
  deactivateAnnouncement,
  deleteAnnouncement,
  getUserAnnouncements,
} from "../../services/api";
import { notification } from "antd";

export const UserAnnoucements = () => {
  const { user } = useAuth();
  const { userId } = useParams();
  const [announcements, setAnnouncements] = useState([]);

  const navigate = useNavigate();

  const navigateToCreateAnnouncement = () => {
    navigate("/newAnnouncement");
  };

  const confirmDelete = async (announcementId) => {
    try {
      await deleteAnnouncement(announcementId);
      notification.success({
        message: "Anúncio deletado",
      });
      getUserAnnouncements(userId).then((response) => {
        setAnnouncements(response.data);
      });
    } catch {
      notification.error({
        message: "Não foi possível deletar o anúncio",
      });
    }
  };

  const confirmDeactivate = async (announcementId) => {
    try {
      await deactivateAnnouncement(announcementId);
      notification.success({
        message: "Anúncio desativado",
      });
      getUserAnnouncements(userId).then((response) => {
        setAnnouncements(response.data);
      });
    } catch {
      notification.error({
        message: "Não foi possível desativar o anúncio",
      });
    }
  };

  const confirmActivate = async (announcementId) => {
    try {
      await activateAnnouncement(announcementId);
      notification.success({
        message: "Anúncio ativado",
      });
      getUserAnnouncements(userId).then((response) => {
        setAnnouncements(response.data);
      });
    } catch {
      notification.error({
        message: "Não foi possível ativar o anúncio",
      });
    }
  };

  useEffect(() => {
    getUserAnnouncements(userId).then((response) => {
      setAnnouncements(response.data);
    });
  }, []);

  return (
    <Container>
      <ButtonDiv>
        <Button onClick={navigateToCreateAnnouncement}>Novo anúncio</Button>
      </ButtonDiv>
      <Wrapper>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.title}
            showButtons={announcement.id_user === user.id_user}
            onDelete={confirmDelete}
            onActivate={confirmActivate}
            onDeactivate={confirmDeactivate}
            announcement={announcement}
          />
        ))}
      </Wrapper>
    </Container>
  );
};
