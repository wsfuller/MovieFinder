import { makeStyles } from '@fluentui/react';

const useMoviePosterStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    display: 'inline-block',
    border: '2px solid transparent',
    borderRadius: theme.effects.roundedCorner6,
    transition: 'border .5s ease-in-out',
    selectors: {
      '&:hover': {
        border: `2px solid ${theme.palette.themeDarker}`,
      },
    },
  },
}));

export default useMoviePosterStyles;
