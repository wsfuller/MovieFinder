import { makeStyles } from '@fluentui/react';

import { useBreakpoints } from '../../utils/hooks';

const useMovieDetailsPanelStyles = makeStyles((theme) => {
  const breakpoints = useBreakpoints();

  return {
    root: {},
    bodyContent: {
      padding: `0 ${theme.spacing.m}`,
      [breakpoints.mediaQuery(breakpoints.large)]: {
        padding: `0 ${theme.spacing.l2}`,
      },
    },
    shimmer: {
      marginBottom: theme.spacing.m,
    },
  };
});

export default useMovieDetailsPanelStyles;
