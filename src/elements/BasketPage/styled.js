import styled from "styled-components";
import { ReactComponent as LogoStyled } from "../../images/icons/Logo.svg";
import { ReactComponent as Basket } from "../../images/icons/Basket.svg";
import { ReactComponent as Trash } from "../../images/icons/Trash.svg";
import { NavLink } from "react-router-dom";

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const LogoIcon = styled(LogoStyled)`
  height: 80px;
  width: 130px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    height: 50px;
    width: 100px;
  }
`;

export const Text = styled.p`
  margin-top: -10px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkgray};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: 14px;
    text-align: center;
    white-space: normal;
    margin-top: 0;
    display: inline-block;
  }
`;

export const Wrapper = styled.div`
  margin: 40px 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin: 60px 150px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const HeaderIcon = styled(Basket)`
  width: 29px;
  height: 29px;
  path {
    stroke: ${({ theme }) => theme.color.black};
    stroke-width: 1;
  }
`;

export const HeaderText = styled.h1`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1%;
  margin: 0;
`;

export const CleanBasketIcon = styled(Trash)`
  width: 20px;
  height: 20px;
  path {
    stroke: ${({ theme }) => theme.color.darkgray};
  }
`;

export const CleanBasketText = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkgray};
  }
`;

export const CleanBasket = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    ${CleanBasketText} {
      color: ${({ theme }) => theme.color.red};
    }

    ${CleanBasketIcon} path {
      stroke: ${({ theme }) => theme.color.red};
    }
  }
`;

export const BasketList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;

  ${Wrapper} & 
    display: flex;
    flex-direction: column;
  }
`;

export const BasketItemDetails = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px 60px 40px;
  gap: 80px;
  align-items: center;
`;

export const PizzaImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  max-height: 80px;
  grid-column: 1;
`;

export const BasketItem = styled.li`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1%;
`;

export const PizzaDetails = styled.span`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1%;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  grid-column: 3;
  justify-self: center;
`;

export const QuantityButton = styled.p`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.darkorange};
  color: ${({ theme }) => theme.color.darkorange};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkorange};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const OrdersNumber = styled.p`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1%;
  white-space: nowrap;
`;

export const Price = styled.p`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1%;
  grid-column: 4;
  justify-self: center;
`;

export const DeleteButton = styled.button`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.darkgray};
  color: ${({ theme }) => theme.color.darkgray};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};
  grid-column: 5;
  justify-self: center;

  &:hover {
    background-color: ${({ theme }) => theme.color.red};
    border: 2px solid ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const TotalPizzaNumber = styled.p`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1%;
`;

export const TotalCost = styled.p`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1%;

  span {
    color: ${({ theme }) => theme.color.darkorange};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RedirectButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.darkgray};
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkgray};
  background-color: ${({ theme }) => theme.color.white};
  width: 220px;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightgray};
    border: 1px solid ${({ theme }) => theme.color.lightgray};
    color: ${({ theme }) => theme.color.black};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const PaymentButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.darkorange};
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.darkorange};
  width: 220px;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightorange};
    border: 1px solid ${({ theme }) => theme.color.lightorange};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.color.black};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  margin: 20px auto; /* Centers it horizontally */
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.lightgray};
`;
