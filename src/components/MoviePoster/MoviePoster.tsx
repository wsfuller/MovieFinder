import React from 'react';

import { IMoviePosterProps, defaultProps } from './MoviePoster.types';
import useMoviePosterStyles from './MoviePoster.styles';

import NotFoundMoviePosterLight from '../../assets/images/not-found-movie-poster-light.svg';
import NotFoundMoviePosterDark from '../../assets/images/not-found-movie-poster-dark.svg';

import { useAppSelector } from '../../utils/hooks';

const MoviePoster: React.FC<IMoviePosterProps & typeof defaultProps> = ({ image }) => {
  const classes = useMoviePosterStyles();
  const { isDarkMode } = useAppSelector((state) => state.appTheme);

  const renderMoviePoster = (poster: string | null): string => {
    if (poster) {
      return `${process.env.REACT_APP_IMAGE_URL}w${image.width}${poster}`;
    }
    return isDarkMode ? NotFoundMoviePosterDark : NotFoundMoviePosterLight;
  };

  return <img className={classes.root} src={renderMoviePoster(image.source)} alt={image.alt} />;
};

export default MoviePoster;
