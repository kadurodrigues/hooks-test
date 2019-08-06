import React from 'react';
import { Image, AlbumName } from './styled';

const Cover = ({ name, cover, large }) => (
  <>
    { console.log(large) }
    <Image className="cover" src={cover} alt={name} large={large} />
    <AlbumName large={large}>{name}</AlbumName>
  </>
)

export default Cover;