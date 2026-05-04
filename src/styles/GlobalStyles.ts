import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Arial', sans-serif;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d30 50%, #1a1a1a 100%);
    color: #f5f5f5;
    min-height: 100vh;
    font-weight: 500;
    line-height: 1.3;
    font-size: 13px;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #f5f5f5;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 6px;
    font-family: inherit;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  input[type="radio"] {
    margin-right: 6px;
    transform: scale(1.1);
  }

  label {
    cursor: pointer;
    user-select: none;
  }

  /* Mobile-first responsive breakpoints */
  @media (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 11px;
    }
  }
`;