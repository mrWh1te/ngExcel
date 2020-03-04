import { RootState } from '../../../core/reducers/root.state'
import * as fromSpreadsheetUI from './spreadsheet-ui.reducer'

export interface SpreadsheetState {
  ui: fromSpreadsheetUI.State
}

export interface State extends RootState {
  spreadsheet: SpreadsheetState
}

export const reducers = {
  ui: fromSpreadsheetUI.reducer
}