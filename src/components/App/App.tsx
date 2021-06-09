import React from 'react';

import { Stack, ThemeProvider } from '@fluentui/react';

import useAppStyles from './App.styles';
import { darkTheme, lightTheme } from './themes';
import AppBar from '../AppBar';
import AppFooter from '../AppFooter';
import { HomeView } from '../Views';

import { useAppSelector } from '../../utils/hooks';

const App: React.FC = () => {
  const classes = useAppStyles();
  const {
    appTheme: { isDarkMode },
  } = useAppSelector((state) => state);
  const appTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider applyTo="body" theme={appTheme} className={classes.root}>
      <Stack verticalAlign="space-between" className={classes.root}>
        <Stack.Item>
          <AppBar />
        </Stack.Item>
        <main className={classes.contentContainer}>
          <HomeView />
        </main>
        <Stack.Item>
          <AppFooter />
        </Stack.Item>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
