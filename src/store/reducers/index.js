import { combineReducers } from 'redux';
import search from './search';
import persist from './persist';

export default combineReducers({ search, persist });