import { useSelector } from "react-redux";
import { toAll } from "../../routes";
import {
  NavigationStyled,
  Logo,
  LogoIcon,
  Text,
  HorizontalLine,
} from "./styled";
import {
  selectTotalPrice,
  selectTotalQuantity,
} from "../../features/basketSlice";
import { BasketSummary } from "./components/BasketSummary";
import { Menu } from "./components/Menu";

export const Navigation = ({ setSortedItems }) => {
  const totalItemsInBasket = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <NavigationStyled>
      <Logo to={toAll()}>
        <LogoIcon />
      </Logo>
      <Text>the most delicious pizza in the universe</Text>
      <BasketSummary
        totalPrice={totalPrice}
        totalItemsInBasket={totalItemsInBasket}
      />
      <HorizontalLine />
      <Menu setSortedItems={setSortedItems} />
    </NavigationStyled>
  );
};
