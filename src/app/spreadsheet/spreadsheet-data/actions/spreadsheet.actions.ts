import { createAction, props } from '@ngrx/store'
import { CellValue, CellPosition } from '../models/cell.interfaces'

export const cellClicked = createAction(
  '[Spreadsheet] Cell Clicked', 
  props<{ cellIndex: number}>()
)

export const activeCellFormValueChange = createAction(
    '[Spreadsheet] Active Cell Form Value Change',
    props<{ value: CellValue }>()
)

export const updateCellValue = createAction(
  '[Spreadsheet] Update Cell Value',
    props<{ id: number, value: CellValue, position: CellPosition }>()
)

export const addRowToSpreadsheet = createAction(
  '[Spreadsheet] Add row'
)

export const addColumnToSpreadsheet = createAction(
  '[Spreadsheet] Add column'
)

export const resetSpreadsheet = createAction(
  '[Spreadsheet] Reset'
)