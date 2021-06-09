import React from 'react';

import { Text } from '@fluentui/react';

import IEmptyProps from './Empty.types';

const Empty: React.FC<IEmptyProps> = ({ text }) => {
  const emptyText = text || 'No results to display';

  return (
    <Text as="h2" variant="xLarge">
      {emptyText}
    </Text>
  );
};

export default Empty;
