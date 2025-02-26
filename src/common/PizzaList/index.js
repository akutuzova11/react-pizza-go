import { PizzaItem } from "../PizzaItem/index";
import { Wrapper, Header } from "./styled";
import Pizza from "../../images/pizza.png";

export const PizzaList = ({
  pizzaData = [],
  onClickAddPizza,
  availableSizes,
  availableTypes,
  basket,
}) => {
  if (!pizzaData || pizzaData.length === 0) {
    return <div>No pizzas available</div>;
  }
  return (
    <>
      <Header>Available Pizzas</Header>
      <Wrapper>
        {pizzaData.map(({ id, name, imageUrl, price }) => (
          <PizzaItem
            key={id}
            id={id}
            name={name}
            imageUrl={imageUrl || Pizza}
            price={price}
            availableTypes={availableTypes} // Pass types
            availableSizes={availableSizes}
            onClickAddPizza={onClickAddPizza}
            basket={basket}
          />
        ))}
      </Wrapper>
    </>
  );
};
