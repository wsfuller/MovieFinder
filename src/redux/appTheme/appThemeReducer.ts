import { IAppTheme, AppThemeDispatchTypes } from './appTheme.types';

const initialState: IAppTheme = {
  isDarkMode: false,
};

const appThemeReducer = (state: IAppTheme = initialState, action: AppThemeDispatchTypes): IAppTheme => {
  switch (action.type) {
    case 'SET_APP_THEME': {
      return {
        ...state,
        isDarkMode: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default appThemeReducer;
