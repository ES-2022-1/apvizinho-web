import React from "react";
import { Input, InputNumber } from "antd";
import { Wrapper, VacancyForm, AddressForm, RowItem } from "./style.js";
import TextArea from "antd/lib/input/TextArea.js";

const AnnouncementForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = () => {};

  const onDescriptionChange = (value) => {
    console.log("changed", value);
  };

  return (
    <Wrapper>
      <VacancyForm
        name="vacancy-form"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <VacancyForm.Item
          label="Título"
          name="titulo"
          wrapperCol={{
            span: 8,
          }}
          rules={[
            {
              required: true,
              message: "Insira o título do anúncio",
            },
          ]}
        >
          <Input placeholder="Título" />
        </VacancyForm.Item>
        <VacancyForm.Item
          label="Valor"
          name="valor"
          rules={[
            {
              required: true,
              message: "Insira o valor da vaga",
            },
          ]}
        >
          <InputNumber min={0} addonBefore="R$" placeholder="Valor" />
        </VacancyForm.Item>
        <VacancyForm.Item
          label="Número de vagas"
          name="numero_de_vagas"
          rules={[
            {
              required: true,
              message: "Insira a quantidade de vagas",
            },
          ]}
        >
          <InputNumber
            size="small"
            min={1}
            max={20}
            defaultValue={1}
            onChange={onChange}
            placeholder="1"
          />
        </VacancyForm.Item>
        <VacancyForm.Item
          label="Descrição"
          name="descricao"
          wrapperCol={{
            span: 10,
          }}
        >
          <TextArea showCount maxLength={100} onChange={onDescriptionChange} />
        </VacancyForm.Item>
      </VacancyForm>
      <AddressForm
        name="address-form"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <RowItem>
          <AddressForm.Item
            label="Rua"
            name="Rua"
            style={{
              flex: 3,
            }}
            rules={[
              {
                required: true,
                message: "Insira sua rua.",
              },
            ]}
          >
            <Input placeholder="Rua" />
          </AddressForm.Item>
          <AddressForm.Item
            label="Número"
            name="numero"
            style={{
              flex: 1,
            }}
            rules={[
              {
                required: true,
                message: "Insira o número da rua.",
              },
            ]}
          >
            <Input placeholder="Número" />
          </AddressForm.Item>
        </RowItem>
        <RowItem>
          <AddressForm.Item
            label="Cidade"
            name="cidade"
            style={{
              flex: 2,
            }}
            rules={[
              {
                required: true,
                message: "Insira a cidade.",
              },
            ]}
          >
            <Input placeholder="Cidade" />
          </AddressForm.Item>
          <AddressForm.Item
            label="Estado"
            name="Estado"
            style={{
              flex: 1,
            }}
            rules={[
              {
                required: true,
                message: "Insira o estado.",
              },
            ]}
          >
            <Input placeholder="Estado" />
          </AddressForm.Item>
        </RowItem>
        <RowItem>
          <AddressForm.Item
            label="País"
            name="pais"
            style={{
              flex: 2,
            }}
            rules={[
              {
                required: true,
                message: "Insira seu país.",
              },
            ]}
          >
            <Input placeholder="País" />
          </AddressForm.Item>
          <AddressForm.Item
            label="CEP"
            name="CEP"
            style={{
              flex: 1,
            }}
            rules={[
              {
                required: true,
                message: "Insira o CEP",
              },
            ]}
          >
            <Input placeholder="CEP" />
          </AddressForm.Item>
        </RowItem>
        <AddressForm.Item label="Referência" name="referencia">
          <Input placeholder="Referência" />
        </AddressForm.Item>
      </AddressForm>
    </Wrapper>
  );
};

export default AnnouncementForm;
