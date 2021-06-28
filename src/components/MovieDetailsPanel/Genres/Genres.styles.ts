import { makeStyles } from '@fluentui/react';

const useGenreStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
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
