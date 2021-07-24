import { makeStyles } from '@fluentui/react';

const useGenreStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing.s2} 0`,
    padding: `0 0 ${theme.spacing.s1}`,
    overflowX: 'auto',
    selectors: {
      li: {
        padding: `0 ${theme.spacing.s1}`,
        listStyle: 'none',
        whiteSpace: 'nowrap',
        borderRight: `1px solid ${theme.palette.neutralPrimary}`,
        opacity: 0.5,
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
