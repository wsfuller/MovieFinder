import React from 'react';

import IMoviePosterProps from './MoviePoster.types';
import useMoviePosterStyles from './MoviePoster.styles';

const MoviePoster: React.FC<IMoviePosterProps> = ({ image }) => {
  const classes = useMoviePosterStyles();

  return <img className={classes.root} src={image.source} alt={image.alt} />;
};

export default MoviePoster;
