import { Types } from '../actions/types';

const INITIAL_STATE = {
  searchValuePersisted: '',
  artist: {},
  album: {}
}

const persist = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ARTIST_FOUND:
      return { 
        ...state, 
        artist: action.payload,
      }
    case Types.ALBUM_FOUND:
      return { 
        ...state, 
        album: action.payload
      }
    case Types.UPDATE_SEARCH_VALUE:
      return {
        ...state,
        searchValuePersisted: action.payload 
      }
    default:
      return state;
  }
}

export default persist;