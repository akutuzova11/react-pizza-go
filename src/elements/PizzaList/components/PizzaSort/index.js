import { useState } from "react";
import Select from "react-select";
import { customStyles } from "./customStyles";
import { SortContainer, SortLabel } from "./styled";
import { DropdownIndicator } from "./DropdownIndicator";

const options = [
  { value: "nameAsc", label: "Name (A-Z)" },
  { value: "priceAsc", label: "Price (Low to High)" },
];

export const PizzaSort = ({ setSortedItems, items }) => {
  const [sortOption, setSortOption] = useState("nameAsc");

  const handleSortChange = (selectedOption) => {
    setSortOption(selectedOption.value);

    const sorted = [...items].sort((a, b) => {
      switch (selectedOption.value) {
        case "nameAsc":
          return a.name.localeCompare(b.name);
        case "priceAsc":
          return a.price - b.price;
        default:
          return 0;
      }
    });

    setSortedItems(sorted);
  };

  return (
    <SortContainer>
      <SortLabel htmlFor="sortOptions">Sort by:</SortLabel>
      <Select
        id="sortOptions"
        value={options.find((option) => option.value === sortOption)}
        onChange={handleSortChange}
        options={options}
        styles={customStyles}
        components={{ DropdownIndicator }}
      />
    </SortContainer>
  );
};
