import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core"
import { FormGroup } from '@angular/forms'

import { Cell, CellValue, CellPosition } from '../../../../spreadsheet-data/models/cell.interfaces'
import { getCellPositionByIndex, getColumnLabel } from '../../../../spreadsheet-data/helpers/cell.helpers'

@Component({
  selector: 'spreadsheet-ui',
  templateUrl: './spreadsheet-ui.component.html',
  styleUrls: ['./spreadsheet-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpreadsheetUiComponent {
  // Form
  @ViewChild('active_cell_input') activeCellInput: ElementRef;

  // Grid
  @Input() rows: number
  @Input() columns: number

  // Active
  @Input() activeCellIndex: number
  @Input() activeCellPosition: CellPosition
  @Input() activeCellValue: CellValue
  @Input() activeCellFormGroup: FormGroup

  //
  @Output() cellClicked: EventEmitter<number> = new EventEmitter<number>()
  @Output() addRowClicked: EventEmitter<void> = new EventEmitter<void>()
  @Output() addColumnClicked: EventEmitter<void> = new EventEmitter<void>()

  /**
   * @description    pre-sorted data so on render DOM, the lookup calls are O(1), instead of O(n^2)
   */
  @Input() cells: Cell[]

  /**
   * @description    Helper method to generate an array from a number/string representing the length of the array
   * @param number 
   */
  counter(number: number|string): any[] {
    if (typeof number === 'number') {
      return Array(number)
    }
    return Array(parseInt(number))
  }

  /**
   * 
   * @param index 
   */
  cellClick(index: number) {
    this.cellClicked.emit(index)
    setTimeout(() => this.activeCellInput.nativeElement.focus(), 0)
  }

  /**
   * @description   Convert Index number to Column Label ie A, AA, CT, etc
   * @param index 
   */
  getColumnLabel = getColumnLabel

  /**
   * @description   Gets the value of the cell based on the cell index (it wraps like regular text, in the grid)
   * @param index 
   */
  getCellValue(index: number): CellValue {
    if (this.cells.length === 0) {
      return ''
    }

    const cell = this.cells.filter(cell => {
      const indexCellPosition = getCellPositionByIndex(this.rows, this.columns, index)

      return (cell.position.column === indexCellPosition.column && 
          cell.position.row === indexCellPosition.row)
    })

    return cell[0] && cell[0].value ? cell[0].value : ''
  }

  /**
   * 
   * @param rows 
   * @param columns 
   * @param cellIndex 
   */
  isCellActive(cellIndex: number): boolean {
    const cellPosition = getCellPositionByIndex(this.rows, this.columns, cellIndex)

    return (cellPosition.column === this.activeCellPosition.column &&
            cellPosition.row === this.activeCellPosition.row)
  }
}