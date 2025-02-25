import styled from "styled-components";

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
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PizzaTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1%;
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.color.lightgray};
  border-radius: 10px;
`;

export const SelectorList = styled.ul`
  list-style: none;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const SelectorItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.5%;
  padding: 0 10px;

  &.active {
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    cursor: auto;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin-top: 16px;
  gap: 32px;
`;

export const Price = styled.div`
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1.5%;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.darkorange};
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => theme.color.darkorange} 1px solid;
  border-radius: 30px;
  padding: 10px 20px;
`;
