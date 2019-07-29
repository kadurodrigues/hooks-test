import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchArtist } from '../../store/actions/search';
import { Types } from '../../store/actions/types';
import { Form, Input } from './styles';

const Search = () => {
  const { searchValue } = useSelector(state => state.search);
  const { searchValuePersisted } = useSelector(state => state.persist);
  const dispatch = useDispatch();
  
  const currentSearchValue = window.location.pathname === `/search/result/${searchValuePersisted}` ? searchValuePersisted : searchValue;
  const [ value, setValue ] = useState(currentSearchValue);

  function handleSearchArtist(event) {
    event.preventDefault();
    dispatch(searchArtist(value));
    dispatch({ type: Types.UPDATE_SEARCH_VALUE, payload: value })
  }

  function handleChangeInput(event) {
    setValue(event.target.value);
  }

  return (
    <Form onSubmit={handleSearchArtist}>
      <Input type="text" value={value} onChange={handleChangeInput} placeholder="Type your to do" />
    </Form>
  )
}

export default Search