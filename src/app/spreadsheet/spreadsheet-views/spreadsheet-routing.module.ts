import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import { SpreadsheetViewComponent } from './views/spreadsheet/spreadsheet-view.component'

const routes: Routes = [
  {
    path: '',
    component: SpreadsheetViewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpreadsheetRoutingModule {}