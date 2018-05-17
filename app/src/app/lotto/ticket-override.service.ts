import { Injectable } from '@angular/core';
import { Entrant } from './entrant.dto';

@Injectable()
export class TicketOverrideService {
  constructor() { }

  overrideTicketCounts(entrants: Entrant[]) {
    entrants.forEach(entrant => {
      const normalizedName = entrant.name.toLowerCase();
      switch (normalizedName) {
        case '807':
        case '293':
        case '601':
        case '369':
        case '855':
        case '438':
        case '799':
        case '645':
        case '976':
        case '763':
        case '830':
        case '735':
          entrant.numberOfTickets = 10;
          break;
        case '934':
        case '513':
          entrant.numberOfTickets = 5;
          break;
        default:
          break;
      }
    });
    return entrants;
  }
}
