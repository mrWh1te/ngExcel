import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutsModule } from './layouts/layouts.module'
import { CoreModule } from './core/core.module'
import { SpreadsheetViewsModule } from './spreadsheet/spreadsheet-views/spreadsheet-views.module'

@NgModule({
  imports: [
    CoreModule.forRoot(),
    AppRoutingModule,
    LayoutsModule,
    SpreadsheetViewsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
