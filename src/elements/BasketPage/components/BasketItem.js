import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromBasket,
} from "../../features/basketSlice";
import {
  BasketItemDetails,
  PizzaImage,
  BasketItem as PizzaName,
  PizzaDetails,
  QuantityControls,
  QuantityButton,
  OrdersNumber,
  Price,
  DeleteButton,
  HorizontalLine,
} from "../styled";

export const BasketItem = ({ item, $isLast }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increaseQuantity(item));
  const handleDecrease = () => dispatch(decreaseQuantity(item));
  const handleRemove = () => dispatch(removeFromBasket(item));

  return (
    <>
      <BasketItemDetails>
        <PizzaImage src={item.imageUrl} alt={item.name} />
        <div>
          <PizzaName>{item.name}</PizzaName>
          <PizzaDetails>
            {item.type}, {item.size} cm
          </PizzaDetails>
        </div>
        <QuantityControls>
          <QuantityButton onClick={handleDecrease}>-</QuantityButton>
          <OrdersNumber>{item.quantity}</OrdersNumber>
          <QuantityButton onClick={handleIncrease}>+</QuantityButton>
        </QuantityControls>
        <Price>{item.price} €</Price>
        <DeleteButton onClick={handleRemove}>x</DeleteButton>
      </BasketItemDetails>
      {!$isLast && <HorizontalLine />}
    </>
  );
};
