import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutsModule } from './layouts/layouts.module'
import { CoreModule } from './core/core.module'
import { SpreadsheetViewsModule } from './spreadsheet/spreadsheet-views/spreadsheet-views.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

@NgModule({
  imports: [
    CoreModule.forRoot(),
    AppRoutingModule,
    LayoutsModule,
    SpreadsheetViewsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
