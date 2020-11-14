import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule } from '@angular/material/toolbar'

import { LayoutComponent } from './components/layout/layout.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutsModule {}