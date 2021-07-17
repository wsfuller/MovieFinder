import { makeStyles } from '@fluentui/react';

const useTopBannerStyles = makeStyles(() => {
  return {
    root: {
      width: '100%',
      minHeight: 250,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  };
});

export default useTopBannerStyles;
