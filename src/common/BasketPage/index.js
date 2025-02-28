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
} from "./styled";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromBasket,
  clearBasket,
} from "../../features/basketSlice";
import { toAll } from "../../routes";
import { useDispatch, useSelector } from "react-redux";

export const BasketPage = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);

  return (
    <>
      <Logo to={toAll()}>
        <LogoIcon />
      </Logo>
      <Text>the fastest pizza in town</Text>
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
        <BasketList>
          {basketItems.map(
            ({ id, name, imageUrl, type, size, quantity, price }, index) => (
              <BasketItemDetails key={`${id}-${index}`}>
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

                <Price>{price}</Price>
                <DeleteButton
                  onClick={() => dispatch(removeFromBasket({ id, type, size }))}
                >
                  x
                </DeleteButton>
              </BasketItemDetails>
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
          <RedirectButton>{"< Go back"}</RedirectButton>
          <PaymentButton>Order and pay</PaymentButton>
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};
