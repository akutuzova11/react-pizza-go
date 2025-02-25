import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

body {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    font-family: 'Poppins', sans-serif;
    font-optical-sizing: auto;
    max-width: 1400px;
    margin: 36px 60px;
    overflow-wrap: anywhere;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 94px);
    overflow-y: auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileSmall}px) {
      min-height: calc(100vh - 142px);
      margin: 24px 20px;
    }
  }
`;
