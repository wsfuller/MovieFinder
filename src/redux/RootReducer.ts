import { combineReducers } from 'redux';

import moviesReducer from './movies/moviesReducer';

const RootReducer = combineReducers({
  movies: moviesReducer,
});

export default RootReducer;
