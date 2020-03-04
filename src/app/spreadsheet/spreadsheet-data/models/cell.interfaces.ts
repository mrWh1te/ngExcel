/**
 * Spreadsheet Cell
 */
export type CellValue = string | number

export interface CellPosition {
    row: number
    column: number
}

export interface Cell {
    id?: number
    value?: CellValue
    position: CellPosition
}