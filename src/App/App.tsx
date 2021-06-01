import React, { useEffect } from 'react';

import { Stack, Toggle, ThemeProvider } from '@fluentui/react';

import { darkTheme, lightTheme } from './themes';
import getMovies from '../redux/movies/moviesActions';
import { SET_APP_THEME } from '../redux/appTheme/appTheme.types';

import { useAppDispatch, useAppSelector } from '../utils/hooks';

const App: React.FC = () => {
  const appDispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector((state) => state.appTheme);
  const appTheme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    appDispatch(getMovies());
  }, [appDispatch]);

  return (
    <ThemeProvider applyTo="body" theme={appTheme} className="page-container">
      <Stack>
        <h1>MovieFinder v2</h1>
        <Toggle
          label="Enable Dark Mode"
          onText="Dark Mode"
          offText="Light Mode"
          onChange={() => appDispatch({ type: SET_APP_THEME, payload: !isDarkMode })}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
