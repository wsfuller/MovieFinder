import { makeStyles } from '@fluentui/react';

const useMetaStyles = makeStyles((theme) => {
  return {
    root: {
      marginBottom: theme.spacing.l1,
      padding: `${theme.spacing.s2} ${theme.spacing.m}`,
      border: `1px solid ${theme.palette.themeDark}`,
      borderRadius: theme.effects.roundedCorner6,
      selectors: {
        ul: {
          padding: 0,
          listStyle: 'none',
        },
      },
    },
  };
});

export default useMetaStyles;
