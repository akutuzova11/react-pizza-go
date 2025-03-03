import { TotalWrapper, TotalPizzaNumber, TotalCost } from "../styled";

export const BasketSummary = ({ totalPrice, totalQuantity }) => {
  return (
    <TotalWrapper>
      <TotalPizzaNumber>Total pizzas: {totalQuantity} pcs</TotalPizzaNumber>
      <TotalCost>
        Total: <span>{totalPrice} €</span>
      </TotalCost>
    </TotalWrapper>
  );
};
