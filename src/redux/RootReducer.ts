import { combineReducers } from 'redux';

import appThemeReducer from './appTheme/appThemeReducer';
import moviesReducer from './movies/moviesReducer';

const RootReducer = combineReducers({
  appTheme: appThemeReducer,
  movies: moviesReducer,
});

export default RootReducer;
