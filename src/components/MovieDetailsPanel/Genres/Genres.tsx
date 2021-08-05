import React from 'react';

import { Stack } from '@fluentui/react';

import useGenreStyles from './Genres.styles';
import IGenres from './Genres.types';

const Genres: React.FC<IGenres> = ({ genres }) => {
  const classes = useGenreStyles();

  return (
    <Stack as="ul" className={classes.root} horizontal verticalAlign="center">
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </Stack>
  );
};

export default Genres;
