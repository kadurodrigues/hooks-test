import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchArtist } from '../../store/actions/search';
import { Types } from '../../store/actions/types';

import { Wrapper } from './styled';

const SearchBar = () => {
  const { searchValue } = useSelector(state => state.search);
  const { searchValuePersisted } = useSelector(state => state.persist);
  const dispatch = useDispatch();
  
  const currentSearchValue = window.location.pathname === `/search/results/${searchValuePersisted}` ? searchValuePersisted : searchValue;
  const [ value, setValue ] = useState(currentSearchValue);

  useEffect(() => {

  })

  function handleSearchArtist(event) {
    event.preventDefault();
    dispatch(searchArtist(value));
    dispatch({ type: Types.UPDATE_SEARCH_VALUE, payload: value })
  }

  return (
    <Wrapper>
      <p className="disclaimer">Search for artists, albums or musics</p>
      <form onSubmit={handleSearchArtist}>
        <input
          type="text"
          value={value}
          placeholder="Start to type..."
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      </form>
    </Wrapper>
  )
}

export default SearchBar;