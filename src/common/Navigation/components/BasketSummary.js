import {
  BasketButton,
  Payment,
  BasketIcon,
  VerticalLine,
  OrdersNumber,
} from "../styled";

export const BasketSummary = ({ totalPrice, totalItemsInBasket }) => {
  return (
    <BasketButton>
      <Payment>{totalPrice.toFixed(2)} €</Payment>
      <VerticalLine />
      <BasketIcon />
      <OrdersNumber>{totalItemsInBasket}</OrdersNumber>
    </BasketButton>
  );
};
