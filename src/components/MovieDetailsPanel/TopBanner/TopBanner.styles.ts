import { makeStyles } from '@fluentui/react';

const useTopBannerStyles = makeStyles(() => {
  return {
    root: {
      top: 0,
      left: 0,
      zIndex: 0,
      width: '100%',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  };
});

export default useTopBannerStyles;
