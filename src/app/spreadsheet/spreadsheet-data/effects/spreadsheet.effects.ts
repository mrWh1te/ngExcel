import { Injectable } from '@angular/core'

import {Actions, ofType, createEffect} from '@ngrx/effects'
import {select, Store} from '@ngrx/store'

import { withLatestFrom, map } from 'rxjs/operators'

import { activeCellFormValueChange, updateCellValue } from '../actions/spreadsheet.actions'
import { selectSpreadsheetActiveCellId, selectSpreadsheetActiveCellPosition, selectSpreadsheetCellsCount } from '../selectors/spreadsheet-ui.selectors'

@Injectable()
export class SpreadsheetEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
  ) {}

  /**
   * @description   Handle the effect of dispatching action that reduces app state
   */
  updateCellValue$ = createEffect(() => this.actions$.pipe(
    ofType(activeCellFormValueChange),
    map(action => action.value),
    withLatestFrom(this.store.pipe(select(selectSpreadsheetActiveCellId))),
    withLatestFrom(this.store.pipe(select(selectSpreadsheetActiveCellPosition))),
    withLatestFrom(this.store.pipe(select(selectSpreadsheetCellsCount))),
    map(([[[value, id], position], count]) => updateCellValue({id: id ? id : count ? count + 1 : 1, value, position}))
  ))

}