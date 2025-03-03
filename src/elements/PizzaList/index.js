import { useState } from "react";
import { useSelector } from "react-redux";
import { PizzaItem } from "./components/PizzaItem";
import { Wrapper, Header } from "./styled";
import Pizza from "../../images/pizza.png";
import {
  selectAvailableSizes,
  selectAvailableTypes,
  selectPizzas,
} from "../../features/pizzaSlice";

export const PizzaList = ({
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

  if (!filteredPizzaData || filteredPizzaData.length === 0) {
    return <div>No pizzas available</div>;
  }

  return (
    <>
      <Header>Available Pizzas</Header>
      <Wrapper>
        {filteredPizzaData.map(({ id, name, imageUrl, price }) => (
          <PizzaItem
            key={id}
            id={id}
            name={name}
            imageUrl={imageUrl || Pizza}
            price={price}
            availableTypes={availableTypes}
            availableSizes={availableSizes}
            onClickAddPizza={onClickAddPizza}
            basket={basket}
            handleSelectionChange={handleSelectionChange}
          />
        ))}
      </Wrapper>
    </>
  );
};
