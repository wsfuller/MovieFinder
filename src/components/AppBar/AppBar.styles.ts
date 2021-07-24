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
      maxWidth: 200,
    },
    gitHubLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      ...theme.fonts.large,
    },
  };
});

export default useAppBarStyles;
