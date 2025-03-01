import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Logo,
  LogoIcon,
  Text,
  Wrapper,
  Header,
  HeaderContent,
  HeaderIcon,
  HeaderText,
  CleanBasket,
  CleanBasketText,
  CleanBasketIcon,
  BasketList,
  BasketItem,
  OrdersNumber,
  Price,
  DeleteButton,
  TotalWrapper,
  TotalPizzaNumber,
  TotalCost,
  RedirectButton,
  PaymentButton,
  PizzaImage,
  PizzaDetails,
  BasketItemDetails,
  QuantityButton,
  QuantityControls,
  ButtonsWrapper,
  HorizontalLine,
} from "./styled";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromBasket,
  clearBasket,
} from "../../features/basketSlice";
import { toAll } from "../../routes";

export const BasketPage = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  const navigate = useNavigate();

  const handleGoBack = () => {
    setCurrentPage("home");
    navigate("/");
  };

  return (
    <>
      <Logo to={toAll()}>
        <LogoIcon />
      </Logo>
      <Text>the fastest pizza in town</Text>
      <HorizontalLine />
      <Wrapper>
        <Header>
          <HeaderContent>
            <HeaderIcon />
            <HeaderText>Cart</HeaderText>
          </HeaderContent>
          <CleanBasket onClick={() => dispatch(clearBasket())}>
            <CleanBasketIcon />
            <CleanBasketText>Delete all</CleanBasketText>
          </CleanBasket>
        </Header>
        <HorizontalLine />
        <BasketList>
          {basketItems.map(
            ({ id, name, imageUrl, type, size, quantity, price }, index) => (
              <React.Fragment key={`${id}-${index}`}>
                <BasketItemDetails>
                  <PizzaImage src={imageUrl} alt={name} />
                  <div>
                    <BasketItem>{name}</BasketItem>
                    <PizzaDetails>
                      {type}, {size} cm
                    </PizzaDetails>
                  </div>
                  <QuantityControls>
                    <QuantityButton
                      onClick={() =>
                        dispatch(decreaseQuantity({ id, type, size }))
                      }
                    >
                      -
                    </QuantityButton>
                    <OrdersNumber>{quantity}</OrdersNumber>
                    <QuantityButton
                      onClick={() =>
                        dispatch(increaseQuantity({ id, type, size }))
                      }
                    >
                      +
                    </QuantityButton>
                  </QuantityControls>

                  <Price>{price} €</Price>
                  <DeleteButton
                    onClick={() =>
                      dispatch(removeFromBasket({ id, type, size }))
                    }
                  >
                    x
                  </DeleteButton>
                </BasketItemDetails>
                {index < basketItems.length - 1 && <HorizontalLine />}
              </React.Fragment>
            )
          )}
        </BasketList>
        <TotalWrapper>
          <TotalPizzaNumber>
            Total pizzas:&nbsp;
            {basketItems.reduce((total, item) => total + item.quantity, 0)} pcs
          </TotalPizzaNumber>
          <TotalCost>
            Total:&nbsp;
            <span>
              {basketItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
              €
            </span>
          </TotalCost>
        </TotalWrapper>
        <ButtonsWrapper>
          <RedirectButton onClick={handleGoBack}>{"< Go back"}</RedirectButton>
          <PaymentButton>Order and pay</PaymentButton>
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};
