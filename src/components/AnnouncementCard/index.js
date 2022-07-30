import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { CardLink } from "./style";

const AnnouncementCard = ({ announcement }) => {
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
    >
      <p>{announcement.description}</p>
    </Card>
  );
};

export default AnnouncementCard;
