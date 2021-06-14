import { FontWeights } from '@fluentui/react';
import { relative } from 'path';

import { IBreakpoints } from './themes.types';

export const breakpoints: IBreakpoints = {
  small: 320,
  medium: 480,
  large: 640,
  xLarge: 1024,
  xxLarge: 1366,
  xxxLarge: 1920,
  printMediaQuery: (breakpoint) => {
    return `@media(min-width: ${breakpoint}px)`;
  },
};

const lightPalatte = {
  themePrimary: '#7225ba',
  themeLighterAlt: '#f8f4fc',
  themeLighter: '#e5d5f4',
  themeLight: '#cfb2ea',
  themeTertiary: '#a46fd6',
  themeSecondary: '#803ac2',
  themeDarkAlt: '#6722a8',
  themeDark: '#571c8d',
  themeDarker: '#401568',
  neutralLighterAlt: '#faf9f8',
  neutralLighter: '#f3f2f1',
  neutralLight: '#edebe9',
  neutralQuaternaryAlt: '#e1dfdd',
  neutralQuaternary: '#d0d0d0',
  neutralTertiaryAlt: '#c8c6c4',
  neutralTertiary: '#a19f9d',
  neutralSecondary: '#605e5c',
  neutralPrimaryAlt: '#3b3a39',
  neutralPrimary: '#323130',
  neutralDark: '#201f1e',
  black: '#000000',
  white: '#ffffff',
};

const darkPalatte = {
  themePrimary: '#ac6aeb',
  themeLighterAlt: '#070409',
  themeLighter: '#1c1126',
  themeLight: '#342046',
  themeTertiary: '#673f8d',
  themeSecondary: '#985dce',
  themeDarkAlt: '#b478ed',
  themeDark: '#bf8bef',
  themeDarker: '#cfa9f4',
  neutralLighterAlt: '#2b2b2b',
  neutralLighter: '#333333',
  neutralLight: '#414141',
  neutralQuaternaryAlt: '#4a4a4a',
  neutralQuaternary: '#515151',
  neutralTertiaryAlt: '#6f6f6f',
  neutralTertiary: '#c8c8c8',
  neutralSecondary: '#d0d0d0',
  neutralPrimaryAlt: '#dadada',
  neutralPrimary: '#ffffff',
  neutralDark: '#f4f4f4',
  black: '#f8f8f8',
  white: '#222222',
};

const components = {
  Panel: {
    styles: {
      commands: {
        position: 'relative',
        zIndex: 100,
      },
      navigation: {
        selectors: {
          button: {
            color: lightPalatte.themeLight,
            background: '#000000',
          },
        },
      },
    },
  },
};

export const lightTheme = {
  fontWeights: {
    ...FontWeights,
  },
  components: {
    ...components,
  },
  palette: {
    ...lightPalatte,
  },
};

export const darkTheme = {
  fontWeights: {
    ...FontWeights,
  },
  components: {
    ...components,
  },
  palette: {
    ...darkPalatte,
  },
};
