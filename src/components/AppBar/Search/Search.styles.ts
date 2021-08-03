import { makeStyles } from '@fluentui/react';

import { useBreakpoints } from '../../../utils/hooks';

const useSearchStyles = makeStyles((theme) => {
  const breakpoints = useBreakpoints();

  return {
    modalContainer: {
      width: '100vw',
      maxWidth: 1000,
    },
    modalContent: {
      maxHeight: 'calc(100vh - 64px)',
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
    searchInput: {
      marginBottom: theme.spacing.l1,
    },
  };
});

export default useSearchStyles;
