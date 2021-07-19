import React from 'react';

import { useTheme, Icon, Link, Stack, Text } from '@fluentui/react';

import useFooterStyles from './AppFooter.styles';

import WSFBuildBadgeDark from '../../assets/images/wsf-build-badge-dark.svg';
import WSFBuildBadgeLight from '../../assets/images/wsf-build-badge-light.svg';
import theMovieDatabaseLogo from '../../assets/images/the-movie-database-logo.svg';

import { useAppSelector, useBreakpoints, useWindowSize } from '../../utils/hooks';

const AppFooter: React.FC = () => {
  const classes = useFooterStyles();
  const {
    appTheme: { isDarkMode },
  } = useAppSelector((state) => state);
  const theme = useTheme();
  const size = useWindowSize();
  const breakpoints = useBreakpoints();
  const currentYear = new Date().getFullYear();

  const isFooterContentStackHorizontal = size.width >= breakpoints.large;

  const wsfBuildBadge = isDarkMode ? WSFBuildBadgeLight : WSFBuildBadgeDark;

  return (
    <Stack as="footer" className={classes.root}>
      <Stack
        className="grid-container"
        horizontal={isFooterContentStackHorizontal}
        horizontalAlign={isFooterContentStackHorizontal ? 'space-between' : 'center'}
        verticalAlign="center"
        tokens={{ childrenGap: theme.spacing.m }}
      >
        <Stack.Item>
          <Link href="https://wsfuller.dev" className={classes.wsfBrandingLink} target="_blank" rel="noopener">
            <img className="image-responsive" src={wsfBuildBadge} alt="WSF Logo" />
          </Link>
        </Stack.Item>
        <Stack.Item>
          <Text variant="mediumPlus">
            Made with <Icon className={classes.copyRightIcon} iconName="HeartFill" /> {currentYear}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Link href="https://www.themoviedb.org/" className={classes.tmdbLogoLink} target="_blank" rel="noopener">
            <img className="image-responsive" src={theMovieDatabaseLogo} alt="The Movie Database Logo" />
          </Link>
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default AppFooter;
