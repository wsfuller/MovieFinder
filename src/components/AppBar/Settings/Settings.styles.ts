import { makeStyles } from '@fluentui/react';

const useSettingsStyles = makeStyles((theme) => {
  return {
    callout: {
      padding: `${theme.spacing.s1} ${theme.spacing.m}`,
    },
  };
});

export default useSettingsStyles;
