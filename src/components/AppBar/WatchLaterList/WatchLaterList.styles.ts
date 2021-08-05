import { makeStyles } from '@fluentui/react';

import { useBreakpoints } from '../../../utils/hooks';

const useWatchLaterListStyles = makeStyles((theme) => {
  const breakpoints = useBreakpoints();

  return {
    modalContainer: {
      width: '100vw',
      maxWidth: 1000,
    },
    modalHeader: {
      padding: theme.spacing.m,
    },
    modalHeaderTitle: {
      margin: 0,
    },
    modalBody: {
      padding: `${theme.spacing.s2} ${theme.spacing.m}`,
      [breakpoints.mediaQuery(breakpoints.large)]: {
        minHeight: 300,
      },
    },
    watchLaterIcon: {
      margin: `0 ${theme.spacing.s1}`,
      color: theme.palette.themePrimary,
    },
    list: {
      padding: 0,
      listStyle: 'none',
      selectors: {
        li: {
          marginBottom: theme.spacing.s1,
        },
      },
    },
    button: {
      color: theme.palette.black,
      background: 'none',
      border: 0,
      selectors: {
        '&:hover': {
          cursor: 'pointer',
          span: {
            color: theme.palette.themePrimary,
          },
        },
      },
    },
  };
});

export default useWatchLaterListStyles;
