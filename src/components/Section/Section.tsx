import React from 'react';

import { useTheme, Stack, IStackTokens, Text } from '@fluentui/react';

import ISectionProps from './Section.types';

const Section: React.FC<ISectionProps> = ({ children, title }) => {
  const theme = useTheme();

  const sectionStackTokens: IStackTokens = { childrenGap: theme.spacing.l1 };

  return (
    <Stack as="section" tokens={sectionStackTokens}>
      <Stack.Item>
        <Text as="h1" variant="xxLarge">
          {title}
        </Text>
      </Stack.Item>
      <Stack.Item>{children}</Stack.Item>
    </Stack>
  );
};

export default Section;
