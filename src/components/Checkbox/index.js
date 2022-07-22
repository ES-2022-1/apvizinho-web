import { CheckboxList, Title, Checkbox, Label, CheckItem } from "./style.js";

const CheckboxComponent = ({ items, title, setOptions }) => {
  const handleChangeCheckbox = (event, index) => {
    setOptions(index, event.target.checked);
  };

  return (
    <CheckboxList>
      <Title>{title}</Title>
      {items.map((item, index) => {
        return (
          <CheckItem span={8} key={index}>
            <Checkbox
              id={index + item}
              onChange={(event) => handleChangeCheckbox(event, index + item)}
            />
            <Label htmlFor={index + item}>{item}</Label>
          </CheckItem>
        );
      })}
    </CheckboxList>
  );
};

export default CheckboxComponent;
