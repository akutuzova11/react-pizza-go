import Select from "react-select";

export const customStyles = {
  control: (provided) => ({
    ...provided,
    background: "transparent",
    display: "flex",
    flexWrap: "nowrap",
    border: "none",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
    fontWeight: 500,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#FE5F1E",
  }),
  input: (provided) => ({
    ...provided,
    opacity: 0,
    width: 0,
    padding: 0,
    margin: 0,
    position: "absolute",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#fff8f4" : "transparent",
    color: state.isSelected ? "#FE5F1E" : "black",
    fontWeight: 500,
  }),
};
