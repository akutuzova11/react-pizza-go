import { useState } from "react";
import Select from "react-select";
import { customStyles } from "./customStyles";
import { SortContainer, SortLabel } from "./styled";

export const SortingFilter = ({ setSortedItems }) => {
  const [sortOption, setSortOption] = useState("nameAsc");

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption.value);

    setSortedItems((prevItems) => {
      const sorted = [...prevItems].sort((a, b) => {
        switch (selectedOption.value) {
          case "nameAsc":
            return a.name.localeCompare(b.name);
          case "priceAsc":
            return a.price - b.price;
          default:
            return 0;
        }
      });
      return sorted;
    });
  };

  const options = [
    { value: "nameAsc", label: "Name (A-Z)" },
    { value: "priceAsc", label: "Price (Low to High)" },
  ];

  return (
    <SortContainer>
      <SortLabel htmlFor="sortOptions">Sort by:</SortLabel>
      <Select
        id="sortOptions"
        value={options.find((option) => option.value === sortOption)}
        onChange={handleSortChange}
        options={options}
        styles={customStyles}
      />
    </SortContainer>
  );
};
