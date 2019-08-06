import React from 'react';
import Cover from '../Cover';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../store/actions/types';

import * as S from './styled';

const Album = () => {
  const { album, searchValuePersisted } = useSelector(state => state.persist);
  const dispatch = useDispatch();

  return (
    <>
      <Link to={{ pathname: `/search/results/${searchValuePersisted}` }} onClick={() => dispatch({ type: Types.ALBUM_VISITED })}>
        <S.RouterLink>Back</S.RouterLink>
      </Link>
      <S.Wrapper>
        { album && 
          <>
            <S.AlbumInfo>
              <Cover {...album} large />
              <S.Artist>{album.artist}</S.Artist>
            </S.AlbumInfo>
            <S.TrackList>
              {album.tracks.map((track, i) => (
                <S.Track key={track.id}>
                  <S.Number>{i + 1}.</S.Number>
                  <S.Title>{track.title}</S.Title>
                  <S.Duration>{track.duration}</S.Duration>
                </S.Track>
              ))}
            </S.TrackList>
          </>
        }
      </S.Wrapper>
    </>
  )
}

export default Album