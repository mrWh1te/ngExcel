import { Component, ChangeDetectionStrategy, OnDestroy } from "@angular/core"
import { FormGroup, FormBuilder } from '@angular/forms'
import { Store, select } from '@ngrx/store'

import { Observable, Subscription } from 'rxjs'
import { withLatestFrom, map, filter } from 'rxjs/operators'

import { Cell, CellValue, CellPosition } from '../../../../spreadsheet-data/models/cell.interfaces'
import { cellClicked, activeCellFormValueChange, addRowToSpreadsheet, addColumnToSpreadsheet } from '../../../../spreadsheet-data/actions/spreadsheet.actions'
import { selectAllSpreadsheetCells, selectSpreadsheetRowsCount, selectSpreadsheetColumnsCount, selectSpreadsheetActiveCellPosition } from '../../../../spreadsheet-data/selectors/spreadsheet-ui.selectors'

@Component({
  selector: 'spreadsheet',
  template: `<spreadsheet-ui 
                [rows]="rows$ | async"
                [columns]="columns$ | async"
                [activeCellPosition]="activeCellPosition$ | async"
                [activeCellValue]="activeCellValue$ | async"
                [activeCellFormGroup]="activeCellFormGroup"
                [cells]="spreadsheetCells$ | async"
                (cellClicked)="cellClick($event)"
                (addRowClicked)="addRow()"
                (addColumnClicked)="addColumn()"></spreadsheet-ui>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpreadsheetComponent implements OnDestroy {
  rows$: Observable<number>
  columns$: Observable<number>

  spreadsheetCells$: Observable<Cell[]>

  activeCellValue$: Observable<CellValue>
  activeCellPosition$: Observable<CellPosition>

  activeCellFormGroup: FormGroup

  subscriptions: Subscription[] = []

  constructor(private store: Store<any>, private fb: FormBuilder) {
    // Setup Spreadsheet
    this.activeCellPosition$ = store.pipe(
      select(selectSpreadsheetActiveCellPosition)
    )

    this.spreadsheetCells$ = store.pipe(
      select(selectAllSpreadsheetCells)
    )

    this.rows$ = store.pipe(
      select(selectSpreadsheetRowsCount)
    )

    this.columns$ = store.pipe(
      select(selectSpreadsheetColumnsCount)
    )

    this.activeCellValue$ = store.pipe(
      // 1. get cell position
      select(selectSpreadsheetActiveCellPosition),
      // 3. get cell value from spreadsheet
      withLatestFrom(this.spreadsheetCells$),
      map(([cellPosition, cells]) => {
        const cell = cells.filter(cell => cell.position.column == cellPosition.column && cell.position.row == cellPosition.row)

        return cell && cell[0] && cell[0].value ? cell[0].value : ''
      })
    )

    // Setup form
    this.activeCellFormGroup = fb.group({})
    this.activeCellFormGroup.addControl('active_cell', fb.control(''))

    // Update source of truth when data changes from source of truth
    this.subscriptions.push(
      this.activeCellFormGroup.valueChanges.pipe(
        map(form => form.active_cell),
        withLatestFrom(this.activeCellValue$),
        filter(([formCellValue, cellValue]) => formCellValue !== cellValue),
        map(([formCellValue]) => formCellValue)
      ).subscribe(value => store.dispatch(activeCellFormValueChange({value})))
    )

    // Sync form value with truth of source
    this.subscriptions.push(
      this.activeCellValue$.subscribe(value => {
        this.activeCellFormGroup.setValue({'active_cell': value})
      })
    )
  }

  /**
   * @description    Event handler for User clicking a Cell
   *            
   * @param index 0 based index, left to right, top to bottom
   */
  cellClick(index: number) {
    this.store.dispatch(cellClicked({cellIndex: index}))
  }

  /**
   * 
   */
  addRow() {
    this.store.dispatch(addRowToSpreadsheet())
  }

  /**
   * 
   */
  addColumn() {
    this.store.dispatch(addColumnToSpreadsheet())
  }

  /**
   * 
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}