import React from 'react';

import { Text } from '@fluentui/react';

import ITaglineProps from './Tagline.types';
import useTaglineStyles from './Tagline.styles';

const Tagline: React.FC<ITaglineProps> = ({ tagline }) => {
  const classes = useTaglineStyles();

  return (
    <Text className={classes.root} as="p" variant="mediumPlus" block>
      &ldquo;{tagline}&rdquo;
    </Text>
  );
};

export default Tagline;
