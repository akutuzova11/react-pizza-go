import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 32px;
  display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 32px;
  justify-items: center;
  align-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export const Header = styled.h1`
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 1%;
  margin: 16px 0;
`;