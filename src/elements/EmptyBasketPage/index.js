import { useNavigate } from "react-router-dom";
import {
  CartWrapper,
  Logo,
  LogoIcon,
  Text,
  HorizontalLine,
  Header,
  Capture,
  Image,
  Button,
} from "./styled";
import { toAll } from "../../core/routes";

export const EmptyBasketPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <Logo to={toAll()}>
        <LogoIcon />
      </Logo>
      <Text>the most reactive pizza</Text>
      <HorizontalLine />
      <CartWrapper>
        <Header>Your cart is empty 😕</Header>
        <Capture>
          Most likely, you haven't ordered pizza yet.
          <br />
          In order to order pizza, go to the main page.
        </Capture>
        <Image />
        <Button onClick={handleGoBack}>Go back</Button>
      </CartWrapper>
    </>
  );
};
