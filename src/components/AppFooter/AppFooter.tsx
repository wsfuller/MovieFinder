import React from 'react';

import { Stack } from '@fluentui/react';

import useFooterStyles from './AppFooter.styles';

const AppFooter: React.FC = () => {
  const classes = useFooterStyles();

  return (
    <Stack as="footer" className={classes.root} horizontal verticalAlign="center">
      <h1>App footer</h1>
    </Stack>
  );
};

export default AppFooter;
