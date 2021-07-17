import React from 'react';

import { Stack, Text } from '@fluentui/react';

import IMetaItem from './MetaItem.types';
import useMetaItemStyles from './MetaItem.styles';

const MetaItem: React.FC<IMetaItem> = ({ title, text, renderText }) => {
  const classes = useMetaItemStyles();

  return (
    <Stack horizontal className={classes.itemRow}>
      <Stack.Item className={classes.itemTitle}>
        <Text variant="mediumPlus" as="p">
          {title}:
        </Text>
      </Stack.Item>
      <Stack.Item className={classes.itemText}>
        {renderText && renderText()}
        {text && (
          <Text variant="mediumPlus" as="p">
            {text}
          </Text>
        )}
      </Stack.Item>
    </Stack>
  );
};

export default MetaItem;
