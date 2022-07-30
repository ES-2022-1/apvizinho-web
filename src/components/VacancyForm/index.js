import { Select, Input, Wrapper } from "./style.js";
import CheckboxComponent from "../Checkbox";

const VacancyForm = ({ items, title, setOptions, price, gender }) => {
  return (
    <>
      <Wrapper>
        <CheckboxComponent
          items={items}
          title={title}
          setOptions={setOptions}
        />
        <Input
          type="text"
          defaultValue={price}
          placeholder="Valor (ex: 200,00)"
        />
        <Select defaultValue={gender}>
          <option value="" hidden>
            Gênero
          </option>
          <option value="FEMALE">Feminino</option>
          <option value="MALE">Masculino</option>
          <option value="NONE">Não especificado</option>
        </Select>
      </Wrapper>
    </>
  );
};

export default VacancyForm;
