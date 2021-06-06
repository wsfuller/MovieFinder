import React, { useEffect } from 'react';
import { batch } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { Stack, Toggle, ThemeProvider } from '@fluentui/react';

import { darkTheme, lightTheme } from './themes';
import { getNowPlayingMovies, getPopularMovies } from '../../redux/movies/moviesActions';
import { SET_APP_THEME } from '../../redux/appTheme/appTheme.types';

import Section from '../Section';
import MoviesList from '../MoviesList';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const App: React.FC = () => {
  const appDispatch = useAppDispatch();
  const {
    appTheme: { isDarkMode },
    movies: { nowPlaying, popular },
  } = useAppSelector((state) => state);
  const appTheme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    batch(() => {
      appDispatch(getNowPlayingMovies());
      appDispatch(getPopularMovies());
    });
  }, [appDispatch]);

  let nowPlayingMovies = null;
  let popularMovies = null;
  const hasNowPlayingMovies = !isEmpty(nowPlaying.data);
  const hasPopularMovies = !isEmpty(popular.data);

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

  if (popular.isLoading) {
    popularMovies = 'LOADING';
  } else if (popular.error) {
    popularMovies = 'ERROR';
  } else if (!popular.isLoading && hasPopularMovies) {
    popularMovies = (
      <Section title="Popular Movies">
        <MoviesList movies={popular.data.results} />
      </Section>
    );
  } else if (!popular.isLoading && !hasPopularMovies) {
    popularMovies = 'POPULAR MOVIES EMPTY';
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
        <Stack.Item>{popularMovies}</Stack.Item>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
