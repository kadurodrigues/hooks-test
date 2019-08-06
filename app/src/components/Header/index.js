import React from 'react';
import logo from '../../assets/images/spotify.svg';
import { Wrapper, Logo } from './styled';

const Header = () => (
  <Wrapper>
    <Logo src={logo} alt="Spotify logo" />
  </Wrapper>
);

export default Header;
