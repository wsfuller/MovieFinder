import { makeStyles } from '@fluentui/react';

const useGenreStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing.s2} 0`,
    padding: `0 0 ${theme.spacing.s1}`,
    overflowX: 'scroll',
    selectors: {
      li: {
        padding: `0 ${theme.spacing.s1}`,
        listStyle: 'none',
        borderRight: `1px solid ${theme.palette.neutralPrimary}`,
      },
      '& :first-child': {
        paddingLeft: 0,
      },
      '& :last-child': {
        borderRight: 'none',
      },
    },
  },
}));

export default useGenreStyles;
