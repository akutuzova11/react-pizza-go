import styled from "styled-components";
import EmptyBasket from "../../images/emptyCart.png";
import { ReactComponent as LogoStyled } from "../../images/icons/Logo.svg";
import { NavLink } from "react-router-dom";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 80vh;
  width: 100%;
`;

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

export const HorizontalLine = styled.div`
  width: 100%;
  margin: 20px auto; /* Centers it horizontally */
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.lightgray};
`;

export const Header = styled.h1`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1%;
  margin: 0;
`;
export const Capture = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1%;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkgray};
  margin: 0;
`;
export const Image = styled.img.attrs({
  src: EmptyBasket,
})`
  width: 300px;
  height: 255px;
`;
export const Button = styled.p`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.5%;
  margin-top: 24px;
  padding: 16px 24px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkgray};
    border: 1px solid ${({ theme }) => theme.color.darkgray};
    color: ${({ theme }) => theme.color.white};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
