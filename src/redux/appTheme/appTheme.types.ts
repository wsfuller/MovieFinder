export const SET_APP_THEME = 'SET_APP_THEME';

export interface IAppTheme {
  isDarkMode: boolean;
}

export interface ISetAppTheme {
  type: typeof SET_APP_THEME;
  payload: IAppTheme['isDarkMode'];
}

export type AppThemeDispatchTypes = ISetAppTheme;
