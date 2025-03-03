import { ReactComponent as LogoStyled } from "../../images/icons/Logo.svg";
import { ReactComponent as Basket } from "../../images/icons/Basket.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slightly zooms in the logo */
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

export const BasketButton = styled.div`
  padding: 10px 20px;
  height: 50px;
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
  cursor: pointer;
  text-wrap: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightorange};
    border: 1px solid ${({ theme }) => theme.color.lightorange};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    ${Payment}, ${VerticalLine}, ${OrdersNumber} {
      color: ${({ theme }) => theme.color.black};
    }
    ${BasketIcon} path {
      stroke: ${({ theme }) => theme.color.black};
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    position: relative;
    margin: auto;
    padding: 10px 90px;
    height: 40px;
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
  margin-top: 0;

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
  padding: 15px 0;
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding: 10px 0;
    height: 40px;
    font-size: 14px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  padding: 15px 25px;
  transition: color 0.3s ease-in-out;
  border-radius: 30px;
  &.active {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    pointer-events: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color.darkorange};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
    padding: 10px 15px;
  }
`;

export const SortSection = styled.div`
  margin: 0;
  margin-right: 60px;
  right: 0;
  position: absolute;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    position: relative;
    margin: 0;
  }
`;
