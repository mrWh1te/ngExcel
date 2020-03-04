import { Component, ViewEncapsulation, ChangeDetectionStrategy } from "@angular/core"

@Component({
  selector: 'spreadsheet-view',
  templateUrl: './spreadsheet-view.component.html',
  styleUrls: ['./spreadsheet-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpreadsheetViewComponent {}