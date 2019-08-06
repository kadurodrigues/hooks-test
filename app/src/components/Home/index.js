import React from 'react';
import SearchBar from '../Search';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isArtistFound, searchValue } = useSelector(state =>  state.search);

  return(
    <>
      <SearchBar />
      { isArtistFound && <Redirect to={{ pathname: `/search/results/${searchValue}` }} /> }
    </>
  )
}

export default Home;