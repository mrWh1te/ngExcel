import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'
import { createReducer, on, Action } from '@ngrx/store'

import * as spreadsheetActions from '../actions/spreadsheet.actions'

import { Cell, CellPosition } from '../models/cell.interfaces'
import { getCellPositionByIndex } from '../helpers/cell.helpers'

export interface State extends EntityState<Cell> {
  activeCellPosition: CellPosition,
  rows: number,
  columns: number
}

export const adapter: EntityAdapter<Cell> =
  createEntityAdapter<Cell>()

export const initialState: State = {
  activeCellPosition: {
    column: 1,
    row: 1
  },
  rows: 8,
  columns: 8,
  ids: [],
  entities: {}
}

const spreadsheetUIReducer = createReducer(
  initialState,
  on(
    spreadsheetActions.cellClicked, 
    (state, { cellIndex }) => ({...state, activeCellPosition: getCellPositionByIndex(state.rows, state.columns, cellIndex)})
  ),
  on(
    spreadsheetActions.updateCellValue,
    (state, { id, value, position }) => adapter.upsertOne({id, value, position}, state)
  ),
  on(
    spreadsheetActions.addRowToSpreadsheet,
    (state) => ({...state, rows: state.rows + 1})
  ),
  on(
    spreadsheetActions.addColumnToSpreadsheet,
    (state) => ({...state, columns: state.columns + 1})
  ),
  on(
    spreadsheetActions.resetSpreadsheet,
    () => ({...initialState})
  )
)

export function reducer(state: State | undefined, action: Action) {
  return spreadsheetUIReducer(state, action)
}