import { EditOutlined } from "@ant-design/icons";
import { Card, CardLink } from "./style";
import { useNavigate } from "react-router-dom";

const AnnouncementCard = ({ announcement, canEdit }) => {
  const navigate = useNavigate();

  const handleClickEditIcon = (event) => {
    console.log(event);
    event.preventDefault();
    navigate(`../editAnnouncement/${announcement.id_announcement}`);
  };

  return (
    <Card
      title={announcement.title}
      hoverable
      extra={
        <CardLink
          href={announcement.link}
          onClick={() =>
            navigate(`../announcement/${announcement.id_announcement}`)
          }
        >
          more
        </CardLink>
      }
      style={{ width: 300 }}
      cover={
        <img
          id="card-cover"
          alt="room"
          src={announcement.cover || "/image_fault.png"}
        />
      }
      actions={
        canEdit && [<EditOutlined key="edit" onClick={handleClickEditIcon} />]
      }
    >
      <p>{announcement.description}</p>
    </Card>
  );
};

export default AnnouncementCard;
