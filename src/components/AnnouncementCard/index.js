import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { CardLink } from "./style";
import { useNavigate } from "react-router-dom";

const AnnouncementCard = ({ announcement }) => {
  const navigate = useNavigate();

  return (
    <Card
      title={announcement.title}
      extra={<CardLink href={announcement.link}>more</CardLink>}
      style={{ width: 300 }}
      cover={<img alt="room" src={announcement.cover} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      onClick={() =>
        navigate(`editAnnouncement/${announcement.id_announcement}`, {
          replace: true,
        })
      }
    >
      <p>{announcement.description}</p>
    </Card>
  );
};

export default AnnouncementCard;
