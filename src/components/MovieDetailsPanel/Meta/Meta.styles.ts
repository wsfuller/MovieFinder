import { makeStyles } from '@fluentui/react';

import { useBreakpoints } from '../../../utils/hooks';

const useMetaStyles = makeStyles((theme) => {
  const breakpoints = useBreakpoints();

  return {
    root: {
      marginBottom: theme.spacing.l1,
      padding: `${theme.spacing.m} ${theme.spacing.m} ${theme.spacing.s2}`,
      borderTop: `1px solid ${theme.palette.themeDark}`,
    },
    column: {
      width: '100%',
      [breakpoints.mediaQuery(breakpoints.large)]: {
        width: '50%',
      },
    },
    divider: {
      display: 'none',
      alignSelf: 'stretch',
      width: 1,
      margin: `0 ${theme.spacing.m} 0 !important`,
      opacity: 0.25,
      backgroundColor: theme.palette.themeDark,
      [breakpoints.mediaQuery(breakpoints.large)]: {
        display: 'flex',
      },
    },
    metaColumnContainer: {
      marginBottom: theme.spacing.l1,
    },
    icon: {
      fontSize: theme.fonts.superLarge.fontSize,
    },
  };
});

export default useMetaStyles;
