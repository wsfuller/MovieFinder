import React from 'react';

import IMoviePosterProps from './MoviePoster.types';
import useMoviePosterStyles from './MoviePoster.styles';

const MoviePoster: React.FC<IMoviePosterProps> = ({ image }) => {
  const classes = useMoviePosterStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={image.source} alt={image.alt} />
    </div>
  );
};

export default MoviePoster;
