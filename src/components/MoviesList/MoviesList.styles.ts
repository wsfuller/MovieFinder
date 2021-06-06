import { makeStyles } from '@fluentui/react';

const useMoviesListStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
  },
  image: {
    borderRadius: theme.effects.roundedCorner6,
  },
}));

export default useMoviesListStyles;
