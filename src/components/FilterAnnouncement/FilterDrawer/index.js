import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";
import ShowSlider from "../FilterSlider";
import { Select } from "./style";

const ShowDrawer = () => {
  const [visible, setVisible] = useState(false);
  const [placement] = useState("left");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { Option } = Select;

  return (
    <>
      <Space>
        <Button type="primary" onClick={showDrawer}>
          Filtrar
        </Button>
      </Space>
      <Drawer
        title="Filtro"
        placement={placement}
        closable={true}
        onClose={onClose}
        visible={visible}
        key={placement}
        extra={[
          <Button key="2">Cancelar</Button>,
          <Button key="1" type="primary">
            OK
          </Button>,
        ]}
      >
        Gênero:
        <Select onChange={handleChange}>
          <Option value="fem">Feminino</Option>
          <Option value="mas">Masculino</Option>
        </Select>
        Valor:
        <ShowSlider />
      </Drawer>
    </>
  );
};

export default ShowDrawer;
