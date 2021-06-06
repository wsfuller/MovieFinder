import { makeStyles } from '@fluentui/react';

const useAppFooterStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
      backgroundColor: theme.palette.neutralLight,
    },
  };
});

export default useAppFooterStyles;
