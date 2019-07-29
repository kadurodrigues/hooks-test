import React from 'react';
import Search from '../Search';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isArtistFound, searchValue } = useSelector(state =>  state.search);

  return(
    <>
      <Search />
      { isArtistFound && <Redirect to={{ pathname: `/search/result/${searchValue}` }} /> }
    </>
  )
}

export default Home;