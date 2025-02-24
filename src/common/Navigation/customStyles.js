import Select from 'react-select';

export const customStyles = {
  control: (provided) => ({
    ...provided,
    background: "transparent",
    display: "flex",
    flexWrap: "nowrap",
    borderColor: "hsl(0deg 78.56% 55.56%);",

  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'orange' : 'transparent',
    color: state.isSelected ? 'white' : 'black',

  }),
};
