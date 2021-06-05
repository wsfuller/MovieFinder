import { makeStyles } from '@fluentui/react';

const useMoviePosterStyles = makeStyles((theme) => ({
  root: {},
  image: {
    width: '100%',
    height: 'auto',
    display: 'inline-block',
    borderRadius: theme.effects.roundedCorner6,
  },
}));

export default useMoviePosterStyles;
