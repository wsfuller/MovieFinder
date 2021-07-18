import { IPanel } from './panels';
import PanelContentTypes from './panelContentTypes';
import { PanelsDispatchTypes, OPEN_PANEL, CLOSE_PANEL } from './panelsActions.types';

interface IPanelsState extends IPanel {
  isOpen: boolean;
}

const initialState: IPanelsState = {
  isOpen: false,
  panelContentType: PanelContentTypes.Movie,
  movieId: undefined,
};

const panelsReducer = (state: IPanelsState = initialState, action: PanelsDispatchTypes): IPanelsState => {
  switch (action.type) {
    case OPEN_PANEL: {
      return {
        ...state,
        isOpen: true,
        panelContentType: action.payload.panelContentType,
        movieId: action.payload.movieId,
      };
    }
    case CLOSE_PANEL: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default panelsReducer;
