import { Input, Wrapper } from "./style.js";

const UserForm = ({
  userForm,
  handleUserFormValuesChange,
  userInitialValues,
  firstname,
  surname,
  email,
  birthdate,
  cellphone,
  bio,
  password,
}) => {
  console.log(userInitialValues);

  return (
    <Wrapper>
      <UserForm
        name="vacancy-form"
        layout="vertical"
        // initialValues={{
        //   remember: true,
        // }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
        form={userForm}
        onValuesChange={handleUserFormValuesChange}
        initialValues={userInitialValues}
      >
        <UserForm.Item
          label="Título"
          name="title"
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
          <Input
            className="firstname"
            type="text"
            defaultValue={firstname}
            placeholder="Ex: Lucas"
          />
        </UserForm.Item>
        <UserForm.Item>
          <Input
            className="surname"
            type="text"
            defaultValue={surname}
            placeholder="Ex: da Silva"
          />
        </UserForm.Item>
        <UserForm.Item>
          <Input
            className="email"
            type="text"
            defaultValue={email}
            placeholder="Ex: lucas@gmail.com"
          />
        </UserForm.Item>
        <UserForm.Item>
          <Input
            className="birthdate"
            type="text"
            defaultValue={birthdate}
            placeholder="Ex: 09/12/1998"
          />
        </UserForm.Item>
        <UserForm.Item>
          <Input
            className="cellphone"
            type="text"
            defaultValue={cellphone}
            placeholder="Ex: (83) 9 9932-2384"
          />
        </UserForm.Item>
        <UserForm.Item>
          <Input
            className="document"
            type="text"
            defaultValue={document}
            placeholder="Ex: 123.999.999-99"
          />
        </UserForm.Item>
        <UserForm.Item>
          <Input
            className="bio"
            type="text"
            defaultValue={bio}
            placeholder="Ex: Olá me chamo Lucas, sou um cara legal..."
          />
        </UserForm.Item>
        <UserForm.Item>
          <Input className="password" type="text" defaultValue={password} />
        </UserForm.Item>
      </UserForm>
    </Wrapper>
  );
};

export default UserForm;
