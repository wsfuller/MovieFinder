import { makeStyles } from '@fluentui/react';

const useAppBarStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
      backgroundColor: theme.palette.neutralLight,
    },
    appBranding: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.themeDarker,
    },
    appLogo: {
      display: 'inline-block',
      marginRight: 5,
    },
  };
});

export default useAppBarStyles;
