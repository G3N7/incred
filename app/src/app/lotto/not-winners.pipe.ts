import { Pipe, PipeTransform } from '@angular/core';
import { Entrant } from './entrant.dto';

@Pipe({
  name: 'notWinners',
  pure: false
})
export class NotWinnersPipe implements PipeTransform {

  transform(value: Entrant[], args?: any): Entrant[] {
    return value.filter(x => x.itemsWon === null || x.itemsWon.length === 0);
  }

}
