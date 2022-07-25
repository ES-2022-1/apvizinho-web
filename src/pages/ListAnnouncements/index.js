import { useState, useEffect } from "react";
import { Input } from "antd";
import { Container, Wrapper, WrapperSearch } from "./style";
import AnnouncementCard from "../../components/AnnouncementCard/index";
import ShowDrawer from "../../components/FilterAnnouncement/FilterDrawer";

export const ListAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    setAnnouncements([...announcements]);
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
