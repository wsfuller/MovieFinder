import React from 'react';

import { Text } from '@fluentui/react';

import IOverviewProps from './Overview.types';
import useOverviewStyles from './Overview.styles';

const Overview: React.FC<IOverviewProps> = ({ text }) => {
  const classes = useOverviewStyles();

  return (
    <Text className={classes.root} as="p" variant="mediumPlus" block>
      {text}
    </Text>
  );
};

export default Overview;
