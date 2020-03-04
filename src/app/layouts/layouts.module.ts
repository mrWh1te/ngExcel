import { NgModule } from "@angular/core"
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

import { LayoutComponent } from './components/layout/layout.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutsModule {}