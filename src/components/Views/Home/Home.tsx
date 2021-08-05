import React, { useEffect } from 'react';
import { batch } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import { Stack } from '@fluentui/react';

import { getNowPlayingMovies, getPopularMovies, getUpcomingMovies } from '../../../redux/movies/moviesActions';

import useHomeStyles from './Home.styles';
import { Loading, Empty, Error } from '../../ContentStates';
import Section from '../../Section';
import MoviesCarousel from '../../MoviesCarousel';

import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import { sortMoviesBy, SortMoviesBy } from '../../../utils/helpers';

const HomeView: React.FC = () => {
  const classes = useHomeStyles();
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
    nowPlayingMoviesContent = <Loading text="loading now playing movies" />;
  } else if (nowPlaying.error) {
    nowPlayingMoviesContent = <Error />;
  } else if (!nowPlaying.isLoading && hasNowPlayingMovies) {
    const sortedNowPlayingMovies = sortMoviesBy(
      {
        key: SortMoviesBy.ReleaseDate,
        direction: 'ascending',
      },
      nowPlaying.data.results
    );
    nowPlayingMoviesContent = <MoviesCarousel movies={sortedNowPlayingMovies} carouselName="Now Playing" />;
  } else if (!nowPlaying.isLoading && !hasNowPlayingMovies) {
    nowPlayingMoviesContent = <Empty text="Sorry, but no now playing movies to display" />;
  }

  if (popular.isLoading) {
    popularMoviesContent = <Loading text="loading popular movies" />;
  } else if (popular.error) {
    popularMoviesContent = <Error />;
  } else if (!popular.isLoading && hasPopularMovies) {
    const sortedPopularMovies = sortMoviesBy(
      {
        key: SortMoviesBy.VoteAverage,
        direction: 'descending',
      },
      popular.data.results
    );

    popularMoviesContent = <MoviesCarousel movies={sortedPopularMovies} carouselName="Popular" />;
  } else if (!popular.isLoading && !hasPopularMovies) {
    popularMoviesContent = <Empty text="Sorry, but no popular movies to display" />;
  }

  if (upcoming.isLoading) {
    upcomingMoviesContent = <Loading text="loading upcoming movies" />;
  } else if (upcoming.error) {
    upcomingMoviesContent = <Error />;
  } else if (!upcoming.isLoading && hasUpcomingMovies) {
    const sortedUpcomingMovies = sortMoviesBy(
      {
        key: SortMoviesBy.VoteAverage,
        direction: 'descending',
      },
      upcoming.data.results
    );
    upcomingMoviesContent = <MoviesCarousel movies={sortedUpcomingMovies} carouselName="Upcoming" />;
  } else if (!upcoming.isLoading && !hasUpcomingMovies) {
    upcomingMoviesContent = <Empty text="Sorry, but no upcoming movies to display" />;
  }

  return (
    <Stack className="grid-container">
      <Stack.Item>
        <Section title="Now Playing" contentClassName={classes.sectionContent}>
          {nowPlayingMoviesContent}
        </Section>
      </Stack.Item>
      <Stack.Item>
        <Section title="Upcoming" contentClassName={classes.sectionContent}>
          {upcomingMoviesContent}
        </Section>
      </Stack.Item>
      <Stack.Item>
        <Section title="Popular" contentClassName={classes.sectionContent}>
          {popularMoviesContent}
        </Section>
      </Stack.Item>
    </Stack>
  );
};

export default HomeView;
