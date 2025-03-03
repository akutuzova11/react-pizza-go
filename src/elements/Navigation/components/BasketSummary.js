import {
  BasketButton,
  Payment,
  BasketIcon,
  VerticalLine,
  OrdersNumber,
} from "../styled";
export const BasketSummary = ({
  totalPrice,
  totalItemsInBasket,
  handleBasketClick,
}) => {
  const handleClick = () => {
    handleBasketClick();
  };

  return (
    <BasketButton onClick={handleClick}>
      <Payment>{totalPrice.toFixed(2)} €</Payment>
      <VerticalLine />
      <BasketIcon />
      <OrdersNumber>{totalItemsInBasket}</OrdersNumber>
    </BasketButton>
  );
};
