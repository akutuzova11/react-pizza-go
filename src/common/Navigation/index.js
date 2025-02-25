import { SortingFilter } from "./SortingFilter";
import {
  NavigationStyled,
  Logo,
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
  Sorting,
} from "./styled";

export const Navigation = ({setSortedItems}) => {

  return (
    <NavigationStyled>
      <Logo />
      <Text>the most delicious pizza in the universe</Text>
      <BasketButton>
        <Payment>10 euros</Payment>
        <VerticalLine />
        <BasketIcon />
        <OrdersNumber>3</OrdersNumber>
      </BasketButton>
      <HorizontalLine />
      <MenuGrouped>
        <List>
          <Item>🍕 All</Item>
          <Item>🥩 Meat Lovers</Item>
          <Item>🌿 Vegetarian</Item>
          <Item>🍗 BBQ</Item>
          <Item>🌶️ Spicy</Item>
          <Item>🥟 Calzone</Item>
        </List>
        <Sorting>
          <SortingFilter setSortedItems={setSortedItems} />
        </Sorting>
      </MenuGrouped>
    </NavigationStyled>
  );
};
