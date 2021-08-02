import { makeStyles } from '@fluentui/react';

const useSearchResultsStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: '100%',
      paddingBottom: theme.spacing.l2,
    },
    modal: {
      width: '100vw',
      maxWidth: 1000,
    },
    result: {
      maxWidth: 150,
      textAlign: 'center',
      background: 'transparent',
      border: 'none',
      selectors: {
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  };
});

export default useSearchResultsStyles;
