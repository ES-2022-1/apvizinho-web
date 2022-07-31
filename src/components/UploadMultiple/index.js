import { Button, message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadAnnoucementImages } from "../../services/api";

const UploadMultiple = ({ idAnnoucement }) => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  console.log(idAnnoucement);

  const navigate = useNavigate();

  const onPreview = async (file) => {
    let src = file.url;

    console.log(src);
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files", file);
    });
    setUploading(true);

    // fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
    //   method: 'POST',
    //   body: formData,
    // })
    uploadAnnoucementImages(idAnnoucement, formData)
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
        navigate("/annoucements");
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
    listType: "picture-card",
    onPreview,
  };

  return (
    <>
      <ImgCrop rotate>
        <Upload {...props}>{fileList.length < 6 && "+ Upload"}</Upload>
      </ImgCrop>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
        }}
      >
        {uploading ? "Uploading" : "Start Upload"}
      </Button>
    </>
  );
};

export default UploadMultiple;
