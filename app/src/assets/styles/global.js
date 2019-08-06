import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.background};
  }
`;

export const Container = styled.main`
  padding: 0 7%;
`;
