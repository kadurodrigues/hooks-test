import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Types } from '../../store/actions/types';

const Album = () => {
  const { album, searchValuePersisted } = useSelector(state => state.persist);
  const dispatch = useDispatch();

  return (
    <>
      <Link to={{ pathname: `/search/result/${searchValuePersisted}` }} onClick={() => dispatch({ type: Types.ALBUM_VISITED })}>
        Back
      </Link>
      <h2>{album[0].name}</h2>
      { album && 
        <ul>
          { album[0].tracks.map(track => (
            <li key={track.id}>
              <p>{track.name}</p>
              <span>{track.duration}</span>
            </li>
          ))}
        </ul>
      }
    </>
  )
}

export default Album