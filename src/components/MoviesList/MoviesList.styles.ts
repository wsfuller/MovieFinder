import { makeStyles } from '@fluentui/react';

const useMoviesListStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
  },
  image: {
    // width: '100%',
    // height: 'auto',
    // display: 'inline-block',
    borderRadius: theme.effects.roundedCorner6,
  },
}));

export default useMoviesListStyles;
