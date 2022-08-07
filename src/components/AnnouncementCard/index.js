import { EditOutlined, DeleteTwoTone } from "@ant-design/icons";
import { message, Popconfirm } from "antd";
import { Card, CardLink } from "./style";
import { useNavigate } from "react-router-dom";

const AnnouncementCard = ({ announcement, canEdit, canDelete }) => {
  const navigate = useNavigate();

  const handleClickEditIcon = (event) => {
    console.log(event);
    event.preventDefault();
    navigate(`../editAnnouncement/${announcement.id_announcement}`);
  };

  const confirm = (event) => {
    console.log(event);
    event.preventDefault();
    navigate(`../deleteAnnouncement/${announcement.id_announcement}`);
    message.success("Click on Yes");
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
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
          Sobre
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
          <Popconfirm
            key="confirm"
            title="Tem certeza que deseja deletar o anúncio?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            onVisibleChange={() => console.log("visible change")}
          >
            <DeleteTwoTone key="delete" type="primary">
              Open Popconfirm with Promise
            </DeleteTwoTone>
          </Popconfirm>,
        ],
      ]}
    >
      <p>{announcement.description}</p>
    </Card>
  );
};

export default AnnouncementCard;
