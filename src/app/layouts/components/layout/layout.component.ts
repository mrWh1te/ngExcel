import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core"
import { Store } from '@ngrx/store';
import { resetSpreadsheet } from '../../../spreadsheet/spreadsheet-data/actions/spreadsheet.actions';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: [
    './layout.component.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  constructor(private store: Store<any>) {}

  resetSpreadsheet() {
    this.store.dispatch(resetSpreadsheet())
  }
}