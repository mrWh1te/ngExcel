import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

import { LayoutComponent } from './layouts/components/layout/layout.component'

export const RootRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [      
      {
        path: '',
        loadChildren: () => import('./spreadsheet/spreadsheet-views/spreadsheet-views.module').then(m => m.SpreadsheetViewsModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(RootRoutes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
