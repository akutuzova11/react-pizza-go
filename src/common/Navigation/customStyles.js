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
    backgroundColor:  "transparent",
    color: "black",
    fontWeight: 500,
    ":hover": {
      backgroundColor: "#fff8f4", // Add hover effect background
      color: "#FE5F1E", // Change text color on hover
    },
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: "0px 0px 24px -8px rgba(66, 68, 90, 1)", 
  }),
};


