import { EditOutlined, DeleteTwoTone } from "@ant-design/icons";
import { Card, CardLink } from "./style";
import { useNavigate } from "react-router-dom";

const AnnouncementCard = ({ announcement, canEdit, canDelete }) => {
  const navigate = useNavigate();

  const handleClickEditIcon = (event) => {
    console.log(event);
    event.preventDefault();
    navigate(`../editAnnouncement/${announcement.id_announcement}`);
  };

  const handleClickDeleteIcon = (event) => {
    console.log(event);
    event.preventDefault();
    navigate(`../deleteAnnouncement/${announcement.id_announcement}`);
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
          src={announcement.images_url[0] || "/image_fault.png"}
        />
      }
      actions={[
        canEdit && [<EditOutlined key="edit" onClick={handleClickEditIcon} />],
        canDelete && [
          <DeleteTwoTone key="delete" onClick={handleClickDeleteIcon} />,
        ],
      ]}
    >
      <p>{announcement.description}</p>
    </Card>
  );
};

export default AnnouncementCard;
