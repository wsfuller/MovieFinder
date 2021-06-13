import { IPanel } from './panels';

export const OPEN_PANEL = 'OPEN_PANEL';
export const CLOSE_PANEL = 'CLOSE_PANEL';

export interface IOpenPanel {
  type: typeof OPEN_PANEL;
  payload: IPanel;
}

export interface IClosePanel {
  type: typeof CLOSE_PANEL;
}

export type PanelsDispatchTypes = IOpenPanel | IClosePanel;
