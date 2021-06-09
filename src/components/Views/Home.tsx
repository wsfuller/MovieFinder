import React, { useEffect } from 'react';
import { batch } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { Stack } from '@fluentui/react';

import { getNowPlayingMovies, getPopularMovies, getUpcomingMovies } from '../../redux/movies/moviesActions';
import Section from '../Section';
import MoviesCarousel from '../MoviesCarousel';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { sortMoviesBy, SortMoviesBy } from '../../utils/helpers';

const HomeView: React.FC = () => {
  const appDispatch = useAppDispatch();
  const {
    movies: { nowPlaying, popular, upcoming },
  } = useAppSelector((state) => state);

  useEffect(() => {
    batch(() => {
      appDispatch(getNowPlayingMovies());
      appDispatch(getPopularMovies());
      appDispatch(getUpcomingMovies());
    });
  }, [appDispatch]);

  let nowPlayingMoviesContent = null;
  let popularMoviesContent = null;
  let upcomingMoviesContent = null;

  const hasNowPlayingMovies = !isEmpty(nowPlaying.data);
  const hasPopularMovies = !isEmpty(popular.data);
  const hasUpcomingMovies = !isEmpty(upcoming.data);

  if (nowPlaying.isLoading) {
    nowPlayingMoviesContent = 'LOADING';
  } else if (nowPlaying.error) {
    nowPlayingMoviesContent = 'ERROR';
  } else if (!nowPlaying.isLoading && hasNowPlayingMovies) {
    const sortedNowPlayingMovies = sortMoviesBy(
      {
        key: SortMoviesBy.ReleaseDate,
        direction: 'ascending',
      },
      nowPlaying.data.results
    );
    nowPlayingMoviesContent = <MoviesCarousel movies={sortedNowPlayingMovies} />;
  } else if (!nowPlaying.isLoading && !hasNowPlayingMovies) {
    nowPlayingMoviesContent = 'NOW PLAYING EMPTY';
  }

  if (popular.isLoading) {
    popularMoviesContent = 'LOADING';
  } else if (popular.error) {
    popularMoviesContent = 'ERROR';
  } else if (!popular.isLoading && hasPopularMovies) {
    const sortedPopularMovies = sortMoviesBy(
      {
        key: SortMoviesBy.VoteAverage,
        direction: 'descending',
      },
      popular.data.results
    );

    popularMoviesContent = <MoviesCarousel movies={sortedPopularMovies} />;
  } else if (!popular.isLoading && !hasPopularMovies) {
    popularMoviesContent = 'POPULAR MOVIES EMPTY';
  }

  if (upcoming.isLoading) {
    upcomingMoviesContent = 'LOADING';
  } else if (upcoming.error) {
    upcomingMoviesContent = 'ERROR';
  } else if (!upcoming.isLoading && hasUpcomingMovies) {
    const sortedUpcomingMovies = sortMoviesBy(
      {
        key: SortMoviesBy.VoteAverage,
        direction: 'descending',
      },
      upcoming.data.results
    );
    upcomingMoviesContent = <MoviesCarousel movies={sortedUpcomingMovies} />;
  } else if (!upcoming.isLoading && !hasUpcomingMovies) {
    upcomingMoviesContent = 'UPCOMING MOVIES EMPTY';
  }

  return (
    <Stack>
      <Stack.Item>
        <Section title="Now Playing Movies">{nowPlayingMoviesContent}</Section>
      </Stack.Item>
      <Stack.Item>
        <Section title="Upcoming Movies">{upcomingMoviesContent}</Section>
      </Stack.Item>
      <Stack.Item>
        <Section title="Popular Movies">{popularMoviesContent}</Section>
      </Stack.Item>
    </Stack>
  );
};

export default HomeView;
