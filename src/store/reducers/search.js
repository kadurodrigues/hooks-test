import { Types } from '../actions/types';

const INITIAL_STATE = {
  searchValue: '',
  isArtistFound: false,
  isAlbumFound: false,
  isAlbumVisited: false
}

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ARTIST_FOUND:
      return {
        ...state, 
        isArtistFound: true
      }
    case Types.ALBUM_FOUND:
      return { 
        ...state, 
        isAlbumFound: true,
        isAlbumVisited: false
      }
    case Types.ALBUM_VISITED:
      return { 
        ...state,
        isAlbumVisited: true
      }
    case Types.UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload 
      }
    default:
      return state;
  }
}

export default search;