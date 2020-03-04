import { CellPosition } from '../models/cell.interfaces'

/**
 * 
 * @param rows 
 * @param columns 
 * @param index 
 */
export const getCellPositionByIndex = (rows: number, columns: number, index: number): CellPosition => {
    rows = parseInt(rows as any as string)
    columns = parseInt(columns as any as string)
  
    const position = {
      row: undefined,
      column: undefined
    }
  
    let i = 0;
    for(let x = 1; x <= rows; x++) {
      for(let y = 1; y <= columns; y++) {
        if (i === index) {
          position.row = x
          position.column = y
  
          x = columns
          y = rows
        }
        i++
      }
    }
  
    return position
  }

/**
 * 
 * @param position 
 */
export const getCellAddressByPosition = (position: CellPosition): string => {
  // Cell Address is Column followed by Number ie C1, index starts A or 1
  let address = ''

  address += getColumnLabel(position.column).toUpperCase() // Column
  address += position.row
  
  return address
}

/**
 * @description   Covert Cell Position's Column to Excel Address Column Value (ie A, C, DC, etc)
 * @param columnPosition 
 */
export function getColumnLabel(columnPosition: number): string {
  let ordA = 'a'.charCodeAt(0)
  let ordZ = 'z'.charCodeAt(0)
  let len = ordZ - ordA + 1

  let string = ""
  let index = columnPosition - 1
  while(index >= 0) {
      string = String.fromCharCode(index % len + ordA) + string
      index = Math.floor(index / len) - 1
  }
  return string
}