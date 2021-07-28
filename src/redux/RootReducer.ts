import { combineReducers } from 'redux';

import appThemeReducer from './appTheme/appThemeReducer';
import moviesReducer from './movies/moviesReducer';
import panelsReducer from './panels/panelsReducer';
import searchReducer from './search/searchReducer';

const RootReducer = combineReducers({
  appTheme: appThemeReducer,
  movies: moviesReducer,
  panels: panelsReducer,
  searchResults: searchReducer,
});

export default RootReducer;
