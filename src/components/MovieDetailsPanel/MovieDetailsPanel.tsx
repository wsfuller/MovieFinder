import React, { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';

import { Stack, Text } from '@fluentui/react';

import IMovieDetailsPanelProps from './MovieDetailsPanel.types';
import useMovieDetailsPanelStyles from './MovieDetailsPanel.styles';
import { getMovie } from '../../redux/movies/moviesActions';
import TopBanner from './TopBanner';
import Genres from './Genres';
import Title from './Title';
import Tagline from './Tagline';
import Overview from './Overview';
import Meta from './Meta';

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
          <Stack.Item>
            <Genres genres={movie.genres} />
          </Stack.Item>
          <Stack.Item>
            <Title title={movie.title} />
          </Stack.Item>
          {movie.tagline && (
            <Stack.Item>
              <Tagline tagline={movie.tagline} />
            </Stack.Item>
          )}
          <Stack.Item>
            <Overview text={movie.overview} />
          </Stack.Item>
          <Stack.Item>
            <Meta
              budget={movie.budget}
              revenue={movie.revenue}
              runtime={movie.runtime}
              releaseDate={movie.release_date}
              status={movie.status}
              homepage={movie.homepage}
              imdbId={movie.imdb_id}
            />
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
