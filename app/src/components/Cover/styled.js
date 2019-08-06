import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';

export const Image = styled.img`
  width: ${props => props.large ? '12em' : '8em' };
  height: ${props => props.large ? '12em' : '8em' };
  background-color: ${colors.darkGrey};
`

export const AlbumName = styled.p`
  margin: 0;
  margin-top: ${props => props.large ? '10px' : '3px' };
  font-size: ${props => props.large ? '16px' : '12px' };
  color: ${colors.lightGrey};
`;