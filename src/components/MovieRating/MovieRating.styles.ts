import { makeStyles, FontWeights } from '@fluentui/react';

const useMovieRatingStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // width: 70,
      // height: 70,
    },
    tooltipTextContainer: {
      width: '100%',
      height: '100%',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
      background: '#000000',
    },
    rating: {
      color: '#bf8bef',
    },
    ratingPercent: {
      color: '#bf8bef',
      fontWeight: FontWeights.semibold,
      verticalAlign: 'super',
    },
  };
});

export default useMovieRatingStyles;
