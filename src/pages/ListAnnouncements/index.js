import { useState, useEffect } from "react";
import { Input, Spin } from "antd";
import { Container, Wrapper, WrapperSearch } from "./style";
import AnnouncementCard from "../../components/AnnouncementCard/index";
import ShowDrawer from "../../components/FilterAnnouncement/FilterDrawer";
import { listAnnouncement, listAnnouncementFilter } from "../../services/api";

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
        <Input.Search
          placeholder="Search"
          onSearch={(value) => console.log(value)}
          allowClear
        />
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
              announcement={announcement}
            />
          ))}
        </Wrapper>
      )}
    </Container>
  );
};
