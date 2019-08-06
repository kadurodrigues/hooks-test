import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const ListItem = styled.li`
  margin: 0 10px 10px 0;
  padding: 12px;
  cursor: pointer;
  transition: all .2s ease-out;
  :hover {
    background-color: #353535;
  }
`;

export const Cover = styled.img`
  width: 8em;
  height: 8em;
  background-color: ${colors.darkGrey};
`;

export const ArtistName = styled.p`
  margin: 3px 0 0 0;
  font-size: 12px;
  color: ${colors.darkGrey};
`;

export const Result = styled.div`
  margin-top: 30px;
`

export const ResultText = styled.p`
  font-size: 18px;
  color: ${colors.lightGrey}
`
