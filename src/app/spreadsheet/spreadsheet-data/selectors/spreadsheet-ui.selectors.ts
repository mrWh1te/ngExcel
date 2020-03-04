import { createSelector } from '@ngrx/store'

import { selectSpreadsheet } from './spreadsheet.selector'
import { SpreadsheetState } from '../reducers/spreadsheet.reducers'
import { State as SpreadsheetUIState } from '../reducers/spreadsheet-ui.reducer'
import { adapter } from '../reducers/spreadsheet-ui.reducer'

export const selectSpreadsheetUI = createSelector(
  selectSpreadsheet, 
  (state: SpreadsheetState) => state.ui
)

// Entity generated selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors(selectSpreadsheetUI)

export const selectSpreadsheetIds = selectIds // array of Cell entity ids
export const selectSpreadsheetEntities = selectEntities // dictionary of Cell entities
export const selectAllSpreadsheetCells = selectAll // array of Cell entities
export const selectSpreadsheetCellsCount = selectTotal // number of Cell entities

// Our own custom selectors beyond Entity
export const selectSpreadsheetActiveCellPosition = createSelector(
  selectSpreadsheetUI,
  (state:SpreadsheetUIState) => state.activeCellPosition
)
export const selectSpreadsheetActiveCellId = createSelector(
  selectSpreadsheetUI,
  (state:SpreadsheetUIState) => {
    let cellId = undefined
    Object.keys(state.entities).forEach(id => {
      if(state.entities[id].position.column == state.activeCellPosition.column && 
          state.entities[id].position.row == state.activeCellPosition.row) {
        cellId = parseInt(id)
      }
    })

    return cellId
  }
)
export const selectSpreadsheetRowsCount = createSelector(
  selectSpreadsheetUI,
  (state: SpreadsheetUIState) => state.rows
)
export const selectSpreadsheetColumnsCount = createSelector(
  selectSpreadsheetUI,
  (state: SpreadsheetUIState) => state.columns
)