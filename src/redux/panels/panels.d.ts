import PanelContentTypes from './panelContentTypes';

export interface IPanel {
  panelContentType: PanelContentTypes | null;
  movieId?: number;
}
