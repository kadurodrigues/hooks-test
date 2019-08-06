import styled from 'styled-components';
import arrow from '../../assets/icons/left-arrow.svg';
import { colors, media } from '../../assets/styles/variables';

export const RouterLink = styled.span`
  display: inline-block;
  padding-left: 20px;
  color: #fff;
  text-decoration: none;
  background-position: center left;
  background-size: 25%;
  background-image: url(${arrow});
  background-repeat: no-repeat;
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media screen and (min-width: ${media.tablet}) {
    flex-direction: row;
  }
`

export const AlbumInfo = styled.div`
  @media screen and (min-width: ${media.tablet}) {
    margin-right: 40px;
  }
`

export const Artist = styled.p`
  font-size: 14px;  
  color: ${colors.darkGrey};
`

export const TrackList = styled.ul`
  width: 100%;
  list-style: none;
  margin: 20px 0;
  max-height: calc(100vh - 165px);
  overflow-y: scroll;

  @media screen and (min-width: ${media.tablet}) {
    margin: 0;
  }
`

export const Track = styled.li`
  display: flex;
  padding: 12px;
  font-size: 14px;
  transition: all .2s ease-out;
  :hover {
    background-color: #353535;
  }
`

export const Number = styled.p`
  color: ${colors.darkGrey};
`

export const Title = styled.p`
  color: ${colors.lightGrey};
  margin-left: 15px;
`

export const Duration = styled.p`
  color: ${colors.darkGrey};
  margin-left: auto;
`