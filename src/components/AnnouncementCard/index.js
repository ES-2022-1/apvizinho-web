import {
  EditOutlined,
  DeleteOutlined,
  CloseSquareOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";
import { Card, CardLink } from "./style";
import { useNavigate } from "react-router-dom";
import { Popconfirm } from "antd";

const AnnouncementCard = ({
  announcement,
  canEdit,
  onDelete,
  onActivate,
  onDeactivate,
}) => {
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
          src={announcement.images_url[0] || "/image_fault.png"}
        />
      }
      actions={
        canEdit && [
          <EditOutlined key="edit" onClick={handleClickEditIcon} />,
          <Popconfirm
            key="delete"
            title="Tem certeza que deseja excluir o anúncio?"
            onConfirm={() => onDelete(announcement.id_announcement)}
            // onCancel={cancel}
            okText="Sim"
            cancelText="Não"
          >
            <DeleteOutlined />
          </Popconfirm>,
          announcement.status === "ACTIVE" ? (
            <Popconfirm
              key="deactivate"
              title="Tem certeza que deseja desativar o anúncio?"
              onConfirm={() => onDeactivate(announcement.id_announcement)}
              // onCancel={cancel}
              okText="Sim"
              cancelText="Não"
            >
              <CloseSquareOutlined />
            </Popconfirm>
          ) : (
            <Popconfirm
              key="activate"
              title="Deseja ativar o anúncio?"
              onConfirm={() => onActivate(announcement.id_announcement)}
              // onCancel={cancel}
              okText="Sim"
              cancelText="Não"
            >
              <CheckSquareOutlined />
            </Popconfirm>
          ),
        ]
      }
    >
      <p>{announcement.description}</p>
    </Card>
  );
};

export default AnnouncementCard;
