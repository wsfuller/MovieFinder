import React from 'react';

import { Text } from '@fluentui/react';

import IOverviewProps from './Overview.types';

const Overview: React.FC<IOverviewProps> = ({ text }) => {
  return (
    <Text as="p" variant="mediumPlus" block>
      {text}
    </Text>
  );
};

export default Overview;
