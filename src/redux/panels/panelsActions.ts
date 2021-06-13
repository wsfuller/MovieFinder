import { Action, Dispatch } from 'redux';

import PanelContentTypes from './panelContentTypes';
import { PanelsDispatchTypes, OPEN_PANEL, CLOSE_PANEL } from './panelsActions.types';

interface IPanelDetails {
  panelContentType: PanelContentTypes;
  movieId: number;
}

export const openPanel =
  (panelDetails: IPanelDetails) =>
  (dispatch: Dispatch<PanelsDispatchTypes>): Action => {
    return dispatch({
      type: OPEN_PANEL,
      payload: { panelContentType: panelDetails.panelContentType, movieId: panelDetails.movieId || undefined },
    });
  };

export const closePanel =
  () =>
  (dispatch: Dispatch<PanelsDispatchTypes>): Action => {
    return dispatch({ type: CLOSE_PANEL });
  };
