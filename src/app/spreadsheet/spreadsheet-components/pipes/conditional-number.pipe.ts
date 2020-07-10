import { Pipe, PipeTransform } from '@angular/core'
import { DecimalPipe } from '@angular/common'

@Pipe({name: 'conditionalNumber', pure: true})
export class ConditionalNumberPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}

  transform(value: number|string|undefined, args?: any): string|number {
    if (!isNaN(value as number)) {
      return this.decimalPipe.transform(value, args)
    }

    return value
  }
}