import { makeStyles } from '@fluentui/react';

const useSearchStyles = makeStyles((theme) => {
  return {
    modal: {
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
    },
    searchInput: {
      marginBottom: theme.spacing.l1,
    },
  };
});

export default useSearchStyles;
