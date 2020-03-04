import { createFeatureSelector } from '@ngrx/store'

import { SpreadsheetState } from '../reducers/spreadsheet.reducers'

export const selectSpreadsheet = createFeatureSelector<SpreadsheetState>('spreadsheet')