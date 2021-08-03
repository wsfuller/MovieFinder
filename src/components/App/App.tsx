import React from 'react';

import { Panel, PanelType, Stack, ThemeProvider } from '@fluentui/react';

import useAppStyles from './App.styles';
import { darkTheme, lightTheme } from './themes';
import AppBar from '../AppBar';
import AppFooter from '../AppFooter';
import { HomeView } from '../Views';
import { closePanel } from '../../redux/panels/panelsActions';
import { clearSelectedMovie } from '../../redux/movies/moviesActions';
import MovieDetailsPanel from '../MovieDetailsPanel';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const App: React.FC = () => {
  const classes = useAppStyles();
  const appDispatch = useAppDispatch();
  const {
    appTheme: { isDarkMode },
    panels,
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
      <Panel
        isOpen={panels.isOpen}
        type={PanelType.medium}
        onDismiss={() => appDispatch(closePanel())}
        onDismissed={() => appDispatch(clearSelectedMovie())}
        closeButtonAriaLabel="Close"
        isLightDismiss
        overlayProps={{ isDarkThemed: isDarkMode }}
      >
        <MovieDetailsPanel movieId={panels.movieId} />
      </Panel>
    </ThemeProvider>
  );
};

export default App;
