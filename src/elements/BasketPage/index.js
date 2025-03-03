import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Logo,
  LogoIcon,
  Text,
  Wrapper,
  BasketList,
  BasketItem,
  RedirectButton,
  PaymentButton,
  HorizontalLine,
  ButtonsWrapper,
} from "./styled";
import { toAll } from "../../core/routes";
import { BasketSummary } from "./components/BasketSummary";
import { BasketHeader } from "./components/BasketHeader";
import { useBasket } from "../../hooks/basket/useBasket";
import { EmptyBasketPage } from "../EmptyBasketPage";

export const BasketPage = () => {
  const navigate = useNavigate();
  const basketItems = useSelector((state) => state.basket.items);
  const { totalPrice, totalQuantity } = useBasket();

  const handleGoBack = () => {
    navigate("/");
  };

  if (basketItems && basketItems.length === 0) {
    return <EmptyBasketPage />;
  }

  return (
    <>
      <Logo to={toAll()}>
        <LogoIcon />
      </Logo>
      <Text>the fastest pizza in town</Text>
      <HorizontalLine />
      <Wrapper>
        <BasketHeader />
        <HorizontalLine />
        <BasketList>
          {basketItems && basketItems.length > 0} ?
          <>
            {basketItems.map((item, index) => (
              <BasketItem
                key={item.id}
                item={item}
                $isLast={index === basketItems.length - 1}
              />
            ))}
          </>
        </BasketList>
        <BasketSummary totalPrice={totalPrice} totalQuantity={totalQuantity} />
        <ButtonsWrapper>
          <RedirectButton onClick={handleGoBack}>{"< Go back"}</RedirectButton>
          <PaymentButton>Order and pay</PaymentButton>
        </ButtonsWrapper>
      </Wrapper>
    </>
  );
};
