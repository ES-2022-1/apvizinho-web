import { Select, Input, Wrapper } from "./style.js";
import CheckboxComponent from "../../../components/Checkbox";

const VacancyForm = ({ items, title, setOptions }) => {
  return (
    <>
      <Wrapper>
        <CheckboxComponent
          items={items}
          title={title}
          setOptions={setOptions}
        />
        <Input type="text" placeholder="Valor (ex: 200,00)" />
        <Select>
          <option value="" hidden>
            Gênero
          </option>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="none">Não especificado</option>
        </Select>
      </Wrapper>
    </>
  );
};

export default VacancyForm;
