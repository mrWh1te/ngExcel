import { NgModule } from "@angular/core"
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { reducers } from './reducers/spreadsheet.reducers'
import { SpreadsheetEffects } from './effects/spreadsheet.effects'

@NgModule({
  imports: [
    StoreModule.forFeature('spreadsheet', reducers),
    EffectsModule.forFeature([SpreadsheetEffects])
  ]
})
export class SpreadsheetDataModule {}