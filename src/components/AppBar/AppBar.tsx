import React from 'react';

import { Stack } from '@fluentui/react';

import useAppBarStyles from './AppBar.styles';
import Settings from './Settings';

import { useAppSelector } from '../../utils/hooks';

import MovieFinderLogoDark from '../../assets/images/movie-finder-logo-dark.svg';
import MovieFinderLogoLight from '../../assets/images/movie-finder-logo-light.svg';

const AppBar: React.FC = () => {
  const classes = useAppBarStyles();
  const { isDarkMode } = useAppSelector((state) => state.appTheme);
  const appLogo = isDarkMode ? MovieFinderLogoLight : MovieFinderLogoDark;

  return (
    <Stack as="header" className={classes.root}>
      <Stack className="grid-container" horizontal horizontalAlign="space-between" verticalAlign="center">
        <Stack.Item>
          <img className={classes.appLogo} src={appLogo} alt="movie finder logo" />
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal>
            <Settings />
            {/* <AppMoreInfo /> */}
          </Stack>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default AppBar;
