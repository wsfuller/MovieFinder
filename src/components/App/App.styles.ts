import { makeStyles } from '@fluentui/react';

import { useBreakpoints } from '../../utils/hooks';

const useAppStyles = makeStyles((theme) => {
  const breakpoints = useBreakpoints();

  return {
    root: {
      height: '100%',
    },
    contentContainer: {
      width: '100%',
      maxWidth: breakpoints.xxxLarge,
      margin: 'auto',
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
    },
  };
});

export default useAppStyles;
