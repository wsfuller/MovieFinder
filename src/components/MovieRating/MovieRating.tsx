import React from 'react';
import clsx from 'clsx';

import { Text, TooltipHost } from '@fluentui/react';

import IMovieRatingProps from './MovieRating.types';
import useMovieRatingStyles from './MovieRating.styles';

const MovieRating: React.FC<IMovieRatingProps> = ({ voteAverage, voteCount, hasBackground = false }) => {
  const classes = useMovieRatingStyles();

  return (
    <div className={classes.root}>
      <TooltipHost content={`Average rating of ${voteAverage} out of ${voteCount.toLocaleString()} votes`}>
        <div className={clsx(hasBackground && classes.tooltipTextContainer)}>
          <Text className={classes.rating} variant="xxLargePlus">
            {voteAverage * 10}
            <Text className={classes.ratingPercent} variant="medium">
              %
            </Text>
          </Text>
        </div>
      </TooltipHost>
    </div>
  );
};

export default MovieRating;
