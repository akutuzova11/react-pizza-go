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
import { useBasket } from "../../hooks/useBasket";

export const Navigation = ({ setSortedItems }) => {
  const { totalPrice, totalQuantity } = useBasket();

  return (
    <NavigationStyled>
      <Logo to={toAll()}>
        <LogoIcon />
      </Logo>
      <Text>the most delicious pizza in the universe</Text>
      <BasketSummary
        totalPrice={totalPrice}
        totalItemsInBasket={totalQuantity}
      />
      <HorizontalLine />
      <Menu setSortedItems={setSortedItems} />
    </NavigationStyled>
  );
};
