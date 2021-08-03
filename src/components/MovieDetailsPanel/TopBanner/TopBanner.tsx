import React from 'react';

import ITopBannerProps from './TopBanner.types';
import useTopBannerStyles from './TopBanner.styles';

import NotFoundBackdropLight from '../../../assets/images/not-found-movie-backdrop-light.svg';
import NotFoundBackdropDark from '../../../assets/images/not-found-movie-backdrop-dark.svg';

import { useAppSelector } from '../../../utils/hooks';

const TopBanner: React.FC<ITopBannerProps> = ({ backdropPath, movieTitle }) => {
  const classes = useTopBannerStyles();
  const { isDarkMode } = useAppSelector((state) => state.appTheme);

  const renderBackdrop = (backdrop: string | null): string => {
    if (backdrop) {
      return `${process.env.REACT_APP_IMAGE_URL}w500${backdrop}`;
    }
    return isDarkMode ? NotFoundBackdropDark : NotFoundBackdropLight;
  };

  return (
    <div className={classes.root}>
      <img className={classes.image} src={renderBackdrop(backdropPath)} alt={`${movieTitle} backdrop`} />
    </div>
  );
};

export default TopBanner;
