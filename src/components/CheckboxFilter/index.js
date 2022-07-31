import { CheckboxList, Title, Checkbox, Label, CheckItem } from "./style.js";

const CheckboxComponent = ({
  items,
  title,
  handleAddFilter,
  handleRemoveFilter,
  alreadyFiltered,
}) => {
  return (
    <CheckboxList>
      <Title>{title}</Title>
      {Object.keys(items).map((item, index) => {
        return (
          <CheckItem span={8} key={index}>
            <Checkbox
              id={index + item}
              onChange={() => {
                if (alreadyFiltered(item)) {
                  handleRemoveFilter(item);
                } else {
                  handleAddFilter(item);
                }
              }}
              checked={alreadyFiltered(item)}
            />
            <Label htmlFor={index + item}>{items[item]}</Label>
          </CheckItem>
        );
      })}
    </CheckboxList>
  );
};

export default CheckboxComponent;
