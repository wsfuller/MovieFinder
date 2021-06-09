import { makeStyles } from '@fluentui/react';

import useBreakpoints from '../../utils/hooks/breakpoints';

const useSectionStyles = makeStyles((theme) => {
  const breakpoints = useBreakpoints();

  return {
    root: {
      width: '100%',
      padding: `${theme.spacing.s1} 0`,
      [breakpoints.printMediaQuery(breakpoints.large)]: {
        padding: `${theme.spacing.l1} 0`,
      },
    },
  };
});

export default useSectionStyles;
