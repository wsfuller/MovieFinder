import { makeStyles } from '@fluentui/react';

import { useBreakpoints } from '../../../utils/hooks';

const useTopBannerStyles = makeStyles(() => {
  const breakpoints = useBreakpoints();

  return {
    root: {
      width: '100%',
      minHeight: 180,
      overflow: 'hidden',
      [breakpoints.mediaQuery(breakpoints.large)]: {
        minHeight: 350,
      },
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  };
});

export default useTopBannerStyles;
