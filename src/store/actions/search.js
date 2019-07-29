import axios from 'axios';

export const searchArtist = searchValue => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/artists?name=${searchValue}`);
    dispatch({ type: 'ARTIST_FOUND', payload: data })
  };
}

export const getAlbumById = albumId => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/albums?id=${albumId}`);
    dispatch({ type: 'ALBUM_FOUND', payload: data })
  };
}