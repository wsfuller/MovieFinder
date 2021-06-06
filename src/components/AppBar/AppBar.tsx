import React from 'react';

import { Stack, Text, Toggle } from '@fluentui/react';

import useAppBarStyles from './AppBar.styles';
import { SET_APP_THEME } from '../../redux/appTheme/appTheme.types';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const AppBar: React.FC = () => {
  const classes = useAppBarStyles();
  const appDispatch = useAppDispatch();
  const {
    appTheme: { isDarkMode },
  } = useAppSelector((state) => state);

  return (
    <Stack as="header" className={classes.root} horizontal horizontalAlign="space-between" verticalAlign="center">
      <Stack.Item>
        <Text as="p">AppBar</Text>
      </Stack.Item>
      <Stack.Item>
        <Toggle
          label="Enable Dark Mode"
          onText="Dark Mode"
          offText="Light Mode"
          onChange={() => appDispatch({ type: SET_APP_THEME, payload: !isDarkMode })}
        />
      </Stack.Item>
    </Stack>
  );
};

export default AppBar;
