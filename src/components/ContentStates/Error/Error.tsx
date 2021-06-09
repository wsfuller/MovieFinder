import React from 'react';

import { Text } from '@fluentui/react';

import IErrorProps from './Error.types';

const Error: React.FC<IErrorProps> = ({ text }) => {
  const errorText = text || 'Error, could not display results. Please try again later';

  return (
    <Text as="h2" variant="xLarge">
      {errorText}
    </Text>
  );
};

export default Error;
