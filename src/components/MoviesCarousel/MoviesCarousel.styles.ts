import { makeStyles } from '@fluentui/react';

const useMoviesCarouselStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
  },
  image: {
    borderRadius: theme.effects.roundedCorner6,
  },
}));

export default useMoviesCarouselStyles;
