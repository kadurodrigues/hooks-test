import axios from 'axios';
import { API_URL } from '../../helpers/constansts';
import { Types } from './types';

export const searchArtist = (searchValue) => async (dispatch) => {
  try {
    const { data: { artist } } = await axios.get(`${API_URL}/artists/${searchValue}`);
    dispatch({ type: Types.ARTIST_FOUND, payload: artist });
  } catch (error) {
    dispatch({ type: Types.SEARCH_NOT_FOUND })
  }
}

export const getAlbum = (albumId) => async (dispatch) => {
  try {
    const { data: { album } } = await axios.get(`${API_URL}/albums/${albumId}`);
    dispatch({ type: Types.ALBUM_FOUND, payload: album })
  } catch (error) {
    dispatch({ type: Types.ALBUM_NOT_FOUND })
  }
}