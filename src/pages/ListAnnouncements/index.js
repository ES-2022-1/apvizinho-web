import { useState, useEffect } from "react";
import { notification, Spin } from "antd";
import { Container, Wrapper, WrapperSearch } from "./style";
import AnnouncementCard from "../../components/AnnouncementCard/index";
import ShowDrawer from "../../components/FilterAnnouncement/FilterDrawer";
import {
  activateAnnouncement,
  deactivateAnnouncement,
  deleteAnnouncement,
  listAnnouncement,
  listAnnouncementFilter,
} from "../../services/api";

export const ListAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSumitFilters = async (filters) => {
    const payload = {
      filters,
    };

    const response = await listAnnouncementFilter(payload);
    setAnnouncements(response.data);
  };

  const confirmDelete = async (announcementId) => {
    try {
      await deleteAnnouncement(announcementId);
      notification.success({
        message: "Anúncio deletado",
      });
      setLoading(true);
      listAnnouncement().then((response) => {
        setAnnouncements(response.data);
        setLoading(false);
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
      setLoading(true);
      listAnnouncement().then((response) => {
        setAnnouncements(response.data);
        setLoading(false);
      });
    } catch {
      notification.error({
        message: "Não foi possível desativar o anúncio",
      });
    }
    // message.success('Click on Yes');
  };

  const confirmActivate = async (announcementId) => {
    try {
      await activateAnnouncement(announcementId);
      notification.success({
        message: "Anúncio ativado",
      });
      setLoading(true);
      listAnnouncement().then((response) => {
        setAnnouncements(response.data);
        setLoading(false);
      });
    } catch {
      notification.error({
        message: "Não foi possível ativar o anúncio",
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    listAnnouncement().then((response) => {
      setAnnouncements(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <WrapperSearch>
        <ShowDrawer onSubmitFilters={onSumitFilters} />
      </WrapperSearch>
      {loading ? (
        <Spin />
      ) : (
        <Wrapper>
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement.title}
              canEdit={
                announcement.id_user ===
                JSON.parse(localStorage.getItem("@Apvizinho:user")).id_user
              }
              onDelete={confirmDelete}
              onActivate={confirmActivate}
              onDeactivate={confirmDeactivate}
              announcement={announcement}
            />
          ))}
        </Wrapper>
      )}
    </Container>
  );
};
