import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'

import { SpreadsheetComponent } from './components/spreadsheet/smart/spreadsheet.component'
import { SpreadsheetUiComponent } from './components/spreadsheet/ui/spreadsheet-ui.component'
import { SpreadsheetDataModule } from '../spreadsheet-data/spreadsheet-data.module'
import { ArithmeticPipe } from './pipes/arithmetic.pipe'

@NgModule({
  imports: [
    SpreadsheetDataModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [
    SpreadsheetComponent,
    SpreadsheetUiComponent,
    ArithmeticPipe
  ],
  exports: [
    SpreadsheetComponent
  ]
})
export class SpreadsheetComponentsModule {}