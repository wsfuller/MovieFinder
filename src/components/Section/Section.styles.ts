import { makeStyles } from '@fluentui/react';

import useBreakpoints from '../../utils/hooks/breakpoints';

const useSectionStyles = makeStyles((theme) => {
  const breakpoints = useBreakpoints();

  return {
    root: {
      width: '100%',
      padding: `${theme.spacing.m} 0`,
      [breakpoints.mediaQuery(breakpoints.large)]: {
        padding: `${theme.spacing.l2} 0 0`,
      },
    },
  };
});

export default useSectionStyles;
