import { Pipe, PipeTransform } from '@angular/core'
import { Store, select } from '@ngrx/store'

import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

import { selectAllSpreadsheetCells } from '../../spreadsheet-data/selectors/spreadsheet-ui.selectors'
import { getCellAddressByPosition } from '../../spreadsheet-data/helpers/cell.helpers'

@Pipe({name: 'expression', pure: false})
export class ExpressionEvaluationPipe implements PipeTransform {
  constructor(private store: Store<any>) {}

  transform(value: number|string|undefined): Observable<string|number> {
    if (typeof value === 'string') {
      // Special Arithmetic Case (Expression Evaluation)
      if (value.charAt(0) === '=' && value.length > 2) { // only start evaluating when there is enough
        return this.store.pipe(
          select(selectAllSpreadsheetCells),
          map(cells => {
            const expression = value
              .substring(1) // get rid of the equals '='
              .replace(/ /g, '') // remove spaces
              .replace(/([A-Z]*){1}\d+/g, cellAddress => {
                // Excel Cell Address Regex
                // look through the cell positions for a match after converted into Excel Cell Address
                const cell = cells.filter(cell => cellAddress === getCellAddressByPosition(cell.position))

                return cell && cell[0] && cell[0].value ? cell[0].value.toString() : cellAddress
              })

            let evaluation = ''
            try {
              evaluation = eval(expression) // please don't do this at home! High Security risk.
            } catch(error) {
              // console.log('Eval error = ', error)
              evaluation = '...'
            }
            
            return evaluation
          })
        )
      }
    }

    return value ? of(value) : of('')
  }
}