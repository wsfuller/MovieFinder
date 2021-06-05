import React, { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';

import { Stack, Toggle, ThemeProvider } from '@fluentui/react';

import { darkTheme, lightTheme } from './themes';
import { getNowPlayingMovies } from '../../redux/movies/moviesActions';
import { SET_APP_THEME } from '../../redux/appTheme/appTheme.types';

import Section from '../Section';
import MoviesList from '../MoviesList';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const App: React.FC = () => {
  const appDispatch = useAppDispatch();
  const {
    appTheme: { isDarkMode },
    movies: { nowPlaying },
  } = useAppSelector((state) => state);
  const appTheme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    appDispatch(getNowPlayingMovies());
  }, [appDispatch]);

  let nowPlayingMovies = null;
  const hasNowPlayingMovies = !isEmpty(nowPlaying.data);

  if (nowPlaying.isLoading) {
    nowPlayingMovies = 'LOADING';
  } else if (nowPlaying.error) {
    nowPlayingMovies = 'ERROR';
  } else if (!nowPlaying.isLoading && hasNowPlayingMovies) {
    nowPlayingMovies = (
      <Section title="Now Playing">
        <MoviesList movies={nowPlaying.data.results} />
      </Section>
    );
  } else if (!nowPlaying.isLoading && !hasNowPlayingMovies) {
    nowPlayingMovies = 'NOW PLAYING EMPTY';
  }
  return (
    <ThemeProvider applyTo="body" theme={appTheme} className="page-container">
      <Stack>
        <Stack.Item>
          <h1>MovieFinder v2</h1>
          <Toggle
            label="Enable Dark Mode"
            onText="Dark Mode"
            offText="Light Mode"
            onChange={() => appDispatch({ type: SET_APP_THEME, payload: !isDarkMode })}
          />
        </Stack.Item>
        <Stack.Item>{nowPlayingMovies}</Stack.Item>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
