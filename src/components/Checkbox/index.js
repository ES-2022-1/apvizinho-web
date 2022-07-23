import { CheckboxList, Title, Checkbox, Label, CheckItem } from "./style.js";

const CheckboxComponent = ({ items, title, setOptions }) => {
  const handleChangeCheckbox = (event, key) => {
    setOptions(key, event.target.checked);
  };

  return (
    <CheckboxList>
      <Title>{title}</Title>
      {Object.keys(items).map((item, key) => {
        return (
          <CheckItem span={8} key={key}>
            <Checkbox
              id={key}
              onChange={(event) => handleChangeCheckbox(event, key + item)}
            />
            <Label htmlFor={key + item}>{item}</Label>
          </CheckItem>
        );
      })}
    </CheckboxList>
  );
};

export default CheckboxComponent;
