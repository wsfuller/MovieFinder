import { makeStyles } from '@fluentui/react';

const useTopBannerStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    width: '100%',
    maxHeight: 375,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
}));

export default useTopBannerStyles;
