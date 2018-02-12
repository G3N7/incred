import { Injectable } from '@angular/core';
import { Entrant } from './entrant.dto';

@Injectable()
export class TicketOverrideService {
  constructor() {}

  overrideTicketCounts(entrants: Entrant[]) {
    entrants.forEach(entrant => {
      const normalizedName = entrant.name.toLowerCase();
      switch (normalizedName) {
        case 'zRevelation':
          entrant.numberOfTickets = 2;
          break;
        case 'Misaa':
          entrant.numberOfTickets = 2;
          break;
        case 'ysabela':
          entrant.numberOfTickets += 10;
          break;
        case 'healf':
          entrant.numberOfTickets += 2;
          break;
        case 'eternalrose':
          entrant.numberOfTickets += 8;
          break;
        case 'aldrick':
          entrant.numberOfTickets += 7;
          break;
        case 'DantheSQLMan':
          entrant.numberOfTickets += 5;
          break;
        case 'cornholeo':
          entrant.numberOfTickets += 7;
          break;
        case 'F4nG':
          entrant.numberOfTickets += 4;
          break;
        default:
          break;
      }
    });
    return entrants;
  }
}
