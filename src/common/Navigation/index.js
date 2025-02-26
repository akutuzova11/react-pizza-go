import { SortingFilter } from "../SortingFilter";
import {
  toAll,
  toMeatLovers,
  toVegetarian,
  toBBQ,
  toSpicy,
  toCalzone,
} from "../../routes";
import {
  NavigationStyled,
  Logo,
  LogoIcon,
  Text,
  BasketButton,
  Payment,
  BasketIcon,
  VerticalLine,
  OrdersNumber,
  HorizontalLine,
  MenuGrouped,
  List,
  Item,
  StyledNavLink,
  SortSection,
} from "./styled";

export const Navigation = ({ setSortedItems, basket, items }) => {
  const totalItemsInBasket = Object.values(basket).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  const totalPrice = Object.keys(basket).reduce((total, pizzaId) => {
    const pizza = items.find((item) => item.id === parseInt(pizzaId));
    if (pizza) {
      const quantity = basket[pizzaId];
      total += pizza.price * quantity;
    }
    return total;
  }, 0);


  return (
    <NavigationStyled>
      <Logo to={toAll()}>
        <LogoIcon />
      </Logo>
      <Text>the most delicious pizza in the universe</Text>
      <BasketButton>
        <Payment>{totalPrice.toFixed(2)} €</Payment>
        <VerticalLine />
        <BasketIcon />
        <OrdersNumber>{totalItemsInBasket}</OrdersNumber>
      </BasketButton>
      <HorizontalLine />
      <MenuGrouped>
        <List>
          <Item>
            <StyledNavLink to={toAll()}>🍕 All</StyledNavLink>
          </Item>

          <Item>
            <StyledNavLink to={toMeatLovers()}>🥩 Meat Lovers</StyledNavLink>
          </Item>

          <Item>
            <StyledNavLink to={toVegetarian()}>🌿 Vegetarian</StyledNavLink>
          </Item>

          <Item>
            <StyledNavLink to={toBBQ()}>🍗 BBQ</StyledNavLink>
          </Item>

          <Item>
            <StyledNavLink to={toSpicy()}>🌶️ Spicy</StyledNavLink>
          </Item>

          <Item>
            <StyledNavLink to={toCalzone()}>🥟 Calzone</StyledNavLink>
          </Item>
        </List>
        <SortSection>
          <SortingFilter setSortedItems={setSortedItems} />
        </SortSection>
      </MenuGrouped>
    </NavigationStyled>
  );
};
