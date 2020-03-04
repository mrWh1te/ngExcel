import { NgModule } from "@angular/core"
import { FlexLayoutModule } from '@angular/flex-layout'

import { SpreadsheetRoutingModule } from './spreadsheet-routing.module'
import { SpreadsheetViewComponent } from './views/spreadsheet/spreadsheet-view.component'
import { SpreadsheetComponentsModule } from '../spreadsheet-components/spreadsheet-components.module'

@NgModule({
  imports: [
    FlexLayoutModule,
    SpreadsheetRoutingModule,
    SpreadsheetComponentsModule
  ],
  declarations: [
    SpreadsheetViewComponent
  ]
})
export class SpreadsheetViewsModule {}