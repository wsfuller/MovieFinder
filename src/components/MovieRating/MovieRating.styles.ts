import { makeStyles, FontWeights } from '@fluentui/react';

const useMovieRatingStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tooltipTextContainer: {
      width: 'auto',
      height: 'auto',
      padding: theme.spacing.s1,
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
