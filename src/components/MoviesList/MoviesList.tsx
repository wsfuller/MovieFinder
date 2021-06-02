import React from 'react';

import { Stack } from '@fluentui/react';

import IMoviesListProps from './MoviesList.types';

const MoviesList: React.FC<IMoviesListProps> = ({ movies }) => {
  console.log('MOVIES LIST: ', movies);
  return (
    <Stack>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </Stack>
  );
};

export default MoviesList;
