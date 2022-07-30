import { useState, useEffect } from "react";
import { Input } from "antd";
import { Container, Wrapper, WrapperSearch } from "./style";
import AnnouncementCard from "../../components/AnnouncementCard/index";
import ShowDrawer from "../../components/FilterAnnouncement/FilterDrawer";
import { listAnnouncement } from "../../services/api";

export const ListAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    listAnnouncement().then((response) => {
      setAnnouncements(response.data);
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
        <ShowDrawer />
      </WrapperSearch>
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
