import { makeStyles } from '@fluentui/react';

const useAppFooterStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      padding: `${theme.spacing.l2} ${theme.spacing.m}`,
      backgroundColor: theme.palette.neutralLight,
    },
    wsfBrandingLink: {
      display: 'block',
      width: '100%',
      maxWidth: 180,
      height: 'auto',
      opacity: 0.8,
      transition: 'opacity .25s ease-in-out',
      selectors: {
        '&:hover': {
          opacity: 1,
        },
      },
    },
    copyRightIcon: {
      color: theme.palette.red,
    },
    tmdbLogoLink: {
      display: 'block',
      maxWidth: 60,
    },
  };
});

export default useAppFooterStyles;
