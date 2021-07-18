import { makeStyles, FontWeights } from '@fluentui/react';

const useTitleStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'block',
      marginBottom: theme.spacing.s2,
      ...theme.fonts.xxLarge,
      fontWeight: FontWeights.light,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  };
});

export default useTitleStyles;
