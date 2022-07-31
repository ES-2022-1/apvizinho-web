// import { useState } from "react";

import { Form } from "antd";
import { useState } from "react";
import UploadMultiple from "../../components/UploadMultiple";
import { extractUserOptions } from "../../utils/utils";
import { getUser } from "./mock.js";
import { FormDiv, UploadDiv, UserForm, Wrapper } from "./style.js";

const EditUser = () => {
  const user = getUser();
  const [userForm] = Form.useForm();
  const [userOptions, setUserOptions] = useState({});

  const handleSetUserOptions = (index, value) => {
    setUserOptions({ ...userOptions, [index]: value });
  };

  return (
    <Wrapper>
      <FormDiv>
        <UserForm
          UserForm={userForm}
          handleUserFormValuesChange={handleSetUserOptions}
          userInitialValues={extractUserOptions(user)}
        />
        <UploadDiv>
          <h2>Adicionar fotos</h2>
          <UploadMultiple />
        </UploadDiv>
      </FormDiv>
    </Wrapper>
  );
};

export default EditUser;
