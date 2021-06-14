import React, { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';

import { Stack, Text } from '@fluentui/react';

import IMovieDetailsPanelProps from './MovieDetailsPanel.types';
// import useMovieDetailsPanelStyles from './MovieDetailsPanel.styles';
import { getMovie } from '../../redux/movies/moviesActions';
import TopBanner from './TopBanner';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const MovieDetailsPanel: React.FC<IMovieDetailsPanelProps> = ({ movieId }) => {
  // const classes = useMovieDetailsPanelStyles();
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
      <Stack>
        <TopBanner movieTitle={movie.title} backdropPath={movie.backdrop_path} />
        <Stack.Item style={{ width: '100%' }}>
          <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', padding: 0 }}>
            {movie.genres.map((genre) => (
              <li key={genre.id} style={{ listStyle: 'none', marginRight: 10 }}>
                {genre.name}
              </li>
            ))}
          </ul>
        </Stack.Item>
        <Stack.Item>
          <Text as="h2" variant="mega" style={{ fontWeight: 100 }}>
            {movie.title}
          </Text>
        </Stack.Item>
      </Stack>
    );
  } else {
    panelContent = null;
  }

  return panelContent;
};

export default MovieDetailsPanel;
