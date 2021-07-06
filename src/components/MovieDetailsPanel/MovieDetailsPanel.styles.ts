import { makeStyles } from '@fluentui/react';

import { useBreakpoints } from '../../utils/hooks';

const useMovieDetailsPanelStyles = makeStyles((theme) => {
  const breakpoints = useBreakpoints();

  return {
    root: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    bodyContent: {
      padding: `0 ${theme.spacing.s1}`,
      [breakpoints.mediaQuery(breakpoints.large)]: {
        padding: `0 ${theme.spacing.m}`,
      },
    },
  };
});

export default useMovieDetailsPanelStyles;
