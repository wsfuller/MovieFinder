import React, { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';

import { Text } from '@fluentui/react';

import IMovieDetailsPanelProps from './MovieDetailsPanel.types';
import { getMovie } from '../../redux/movies/moviesActions';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const MovieDetailsPanel: React.FC<IMovieDetailsPanelProps> = ({ movieId }) => {
  const appDispatch = useAppDispatch();
  const {
    movies: { selected },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (movieId) {
      appDispatch(getMovie(movieId));
    }
  }, [appDispatch, movieId]);

  let panelContent;

  if (!isEmpty(selected)) {
    panelContent = (
      <div>
        <Text>{selected.data.title}</Text>
      </div>
    );
  } else {
    panelContent = null;
  }

  return panelContent;
};

export default MovieDetailsPanel;
