import styled from "styled-components";
import pizzaLoader from "../../../../images/loading/PizzaLoader.gif";

export const PizzaContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  align-items: start;
  width: 100%;
  text-align: center;
`;

export const PizzaImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 0;
`;

export const PizzaImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  max-height: 300px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 320px;
`;

export const PizzaTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.lightgray};
  border-radius: 10px;
  padding: 8px;
  width: 100%;
  width: 250px;
`;

export const SelectorList = styled.ul`
  list-style: none;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const SelectorItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.5%;
  height: 32px;
  width: ${({ $isSize }) => ($isSize ? "85px" : "130px")};
  border-radius: 5px;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.color.white : "transparent"};
  box-shadow: ${({ $isActive }) =>
    $isActive ? "0px 2px 4px rgba(0, 0, 0, 0.04)" : "none"};
  cursor: ${({ $isActive }) => ($isActive ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;

  &:hover {
    color: ${({ $isActive, theme }) =>
      $isActive ? theme.color.black : theme.color.darkorange};
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  width: 100%;
  width: 250px;
`;

export const Price = styled.div`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1.5%;
`;

export const Quantity = styled.span`
  margin-left: 8px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.darkorange};
  border-radius: 15px;
  padding: 2px 12px;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.darkorange};
  }
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkorange};
  background-color: ${({ theme, $loading }) =>
    $loading ? theme.color.darkorange : theme.color.white};
  border: ${({ theme }) => theme.color.darkorange} 1px solid;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 140px;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkorange};
    color: ${({ theme }) => theme.color.white};

    & ${Quantity} {
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.darkorange};
    }
  }
`;

export const LoadingIcon = styled.div`
  background-image: url(${pizzaLoader});
  width: 45px;
  height: 100%;
  margin: 0;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
