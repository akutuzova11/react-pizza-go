import { useDispatch } from "react-redux";
import { clearBasket } from "../../../features/basketSlice";
import {
  Header,
  HeaderContent,
  HeaderIcon,
  HeaderText,
  CleanBasket,
  CleanBasketText,
  CleanBasketIcon,
} from "../styled";

export const BasketHeader = () => {
  const dispatch = useDispatch();
  return (
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
  );
};
