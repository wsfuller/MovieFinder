import { makeStyles } from '@fluentui/react';

const useMoviesCarouselStyles = makeStyles(() => ({
  root: {
    overflow: 'auto',
  },
  slide: {
    selectors: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
}));

export default useMoviesCarouselStyles;
