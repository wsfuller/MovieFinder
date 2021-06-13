import { combineReducers } from 'redux';

import appThemeReducer from './appTheme/appThemeReducer';
import moviesReducer from './movies/moviesReducer';
import panelsReducer from './panels/panelsReducer';

const RootReducer = combineReducers({
  appTheme: appThemeReducer,
  movies: moviesReducer,
  panels: panelsReducer,
});

export default RootReducer;
