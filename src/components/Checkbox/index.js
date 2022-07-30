import { localOptions, vacancyOptions } from "../../utils/utils.js";
import { CheckboxList, Title, Checkbox, Label, CheckItem } from "./style.js";

const CheckboxComponent = ({ items, index, title, setOptions }) => {
  const handleChangeCheckbox = (event, item) => {
    setOptions(item, event.target.checked, index);
  };

  const options = { ...localOptions, ...vacancyOptions };

  return (
    <CheckboxList>
      <Title>{title}</Title>
      {Object.keys(items).map((item, index) => {
        return (
          <CheckItem span={8} key={index}>
            <Checkbox
              id={item}
              onChange={(event) => handleChangeCheckbox(event, item)}
              checked={items[item]}
            />
            <Label htmlFor={item}>{options[item]}</Label>
          </CheckItem>
        );
      })}
    </CheckboxList>
  );
};

export default CheckboxComponent;
