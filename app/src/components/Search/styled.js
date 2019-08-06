import styled from 'styled-components';
import { colors } from '../../assets/styles/variables'; 

export const Wrapper = styled.div`
  border-bottom: 1px solid ${colors.darkGrey};

  .disclaimer {
    font-size: 14px;
    color: #fff;
  }

  input {
    width: 100%;
    height: 60px;
    background-color: ${colors.background};
    border: 0;
    font-size: 28px;
    font-weight: 700;
    color: #fff;

    &::placeholder {
      color: ${colors.darkGrey};
    }
  }
`


