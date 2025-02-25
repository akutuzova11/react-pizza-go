import { ReactComponent as LogoStyled } from "../../images/Logo.svg";
import { ReactComponent as Basket } from "../../images/Basket.svg";
import styled from "styled-components";

export const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position sticky;
  top: 0;
  z-index: 1000;

   @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
  align-items: center;
justify-content: center;
  }
`;

export const Logo = styled(LogoStyled)`
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

export const BasketButton = styled.div`
  padding: 10px 20px;
  margin-top: 80px;
  margin-right: 60px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.darkorange};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    position: relative;
    margin: auto;
    padding: 10px 82px;
  }
`;

export const Payment = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: 14px;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 25px;
  background-color: ${({ theme }) => theme.color.white};
  opacity: 25%;
  flex-grow: 1;
  margin: 0 4px;
`;

export const BasketIcon = styled(Basket)`
  width: 16px;
  height: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    width: 14px;
    height: 14px;
  }
`;

export const OrdersNumber = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    font-size: 14px;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.lightgray};
  flex-grow: 1;
  margin: 20px 0;
`;

export const MenuGrouped = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Item = styled.li`
  font-size: 16px;
  letter-spacing: 1.5%;
  font-weight: 500;
  background-color: ${({ theme }) => theme.color.lightgray};
  border-radius: 30px;
  padding: 15px 25px;
`;

export const Sorting = styled.p`
  margin: 0;
  margin-right: 60px;
  right: 0;
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    position: relative;
    margin: 0;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SortLabel = styled.label`
  margin-right: 4px;
  font-weight: 500;
  color: #333;
`;

export const StyledDropdownIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fe5f1e;
  margin-left: -10px;
  &:hover {
    color: #ff7a3d;
  }
`;
