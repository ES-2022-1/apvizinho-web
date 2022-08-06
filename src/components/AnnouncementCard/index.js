import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, CardLink } from "./style";
import { useNavigate } from "react-router-dom";

const AnnouncementCard = ({ announcement }) => {
  const navigate = useNavigate();

  return (
    <Card
      title={announcement.title}
      hoverable
      extra={<CardLink href={announcement.link}>more</CardLink>}
      style={{ width: 300 }}
      cover={
        <img
          id="card-cover"
          alt="room"
          src={announcement.cover || "image_fault.png"}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      onClick={() =>
        navigate(`announcement/${announcement.id_announcement}`, {
          replace: true,
          state: `announcement/${announcement.id_announcement}`,
        })
      }
    >
      <p>{announcement.description}</p>
    </Card>
  );
};

export default AnnouncementCard;
