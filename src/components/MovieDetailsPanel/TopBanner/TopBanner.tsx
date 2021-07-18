import React from 'react';

import ITopBannerProps from './TopBanner.types';
import useTopBannerStyles from './TopBanner.styles';

const TopBanner: React.FC<ITopBannerProps> = ({ backdropPath, movieTitle }) => {
  const classes = useTopBannerStyles();
  // TODO: Create fallback image if backdropPath is null
  /*
  fallback image thing for videos with no images or backdrops with no images
   background: #3a6186;
  background: -webkit-linear-gradient(to right, #3a6186, #89253e);
  background: linear-gradient(to right, #3a6186, #89253e);
  */
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={`${process.env.REACT_APP_IMAGE_URL}w500${backdropPath}`}
        alt={`${movieTitle} backdrop`}
      />
    </div>
  );
};

export default TopBanner;
