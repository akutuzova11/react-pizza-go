import { toAll } from "../../routes";
import {
  NavigationStyled,
  Logo,
  LogoIcon,
  Text,
  HorizontalLine,
} from "./styled";
import { BasketSummary } from "./components/BasketSummary";
import { Menu } from "./components/Menu";
import { useBasket } from "../../hooks/basket/useBasket";

export const Navigation = ({ setSortedItems, handleBasketClick }) => {
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
        handleBasketClick={handleBasketClick}
      />
      <HorizontalLine />
      <Menu setSortedItems={setSortedItems} />
    </NavigationStyled>
  );
};
