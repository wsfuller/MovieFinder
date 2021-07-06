import React, { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';

import { Stack } from '@fluentui/react';

import IMovieDetailsPanelProps from './MovieDetailsPanel.types';
import useMovieDetailsPanelStyles from './MovieDetailsPanel.styles';
import { getMovie } from '../../redux/movies/moviesActions';
import TopBanner from './TopBanner';
import Genres from './Genres';
import Title from './Title';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const MovieDetailsPanel: React.FC<IMovieDetailsPanelProps> = ({ movieId }) => {
  const classes = useMovieDetailsPanelStyles();
  const appDispatch = useAppDispatch();
  const {
    movies: {
      selected: { data: movie },
    },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (movieId) {
      appDispatch(getMovie(movieId));
    }
  }, [appDispatch, movieId]);

  let panelContent;

  if (!isEmpty(movie)) {
    panelContent = (
      <Stack className={classes.root}>
        <TopBanner movieTitle={movie.title} backdropPath={movie.backdrop_path} />
        <Stack className={classes.bodyContent}>
          <Stack.Item style={{ width: '100%' }}>
            <Genres genres={movie.genres} />
          </Stack.Item>
          <Stack.Item>
            <Title title={movie.title} />
          </Stack.Item>
        </Stack>
      </Stack>
    );
  } else {
    panelContent = null;
  }

  return panelContent;
};

export default MovieDetailsPanel;
