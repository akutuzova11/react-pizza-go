import { useState } from "react";
import { PizzaList } from "../common/PizzaList";
import {
  selectAvailableSizes,
  selectAvailableTypes,
  selectPizzas,
} from "../features/pizzaSlice";
import { useSelector } from "react-redux";

export const FilteredPizzaList = ({
  onClickAddPizza,
  basket,
  filterCriteria,
  category,
}) => {
  const pizzaData = useSelector(selectPizzas);
  const availableTypes = useSelector(selectAvailableTypes);
  const availableSizes = useSelector(selectAvailableSizes);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectionChange = (pizzaId, size, type) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [pizzaId]: { size, type },
    }));
  };

  const filteredPizzaData = pizzaData.filter((pizza) => {
    const selected = selectedOptions[pizza.id] || {};

    const sizeMatches =
      !filterCriteria?.size || selected?.size === filterCriteria.size;
    const typeMatches =
      !filterCriteria?.type || selected?.type === filterCriteria.type;
    const categoryMatches = category === "All" || pizza.category === category;

    return sizeMatches && typeMatches && categoryMatches;
  });
  return (
    <PizzaList
      pizzaData={filteredPizzaData}
      availableTypes={availableTypes}
      availableSizes={availableSizes}
      onClickAddPizza={onClickAddPizza}
      basket={basket}
      handleSelectionChange={handleSelectionChange}
    />
  );
};
