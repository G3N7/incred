import { Injectable } from '@angular/core';
import { Entrant } from './entrant.dto';

@Injectable()
export class TicketOverrideService {
  constructor() {}

  overrideTicketCounts(entrants: Entrant[]) {
    entrants.forEach(entrant => {
      const normalizedName = entrant.name.toLowerCase();
      switch (normalizedName) {
        case 'f4ng':
          entrant.numberOfTickets = 2;
          break;
        case 'mrpoopypants':
          entrant.numberOfTickets = 2;
          break;
        case 'lifeburn':
          entrant.numberOfTickets += 10;
          break;
        case 'ysabela':
          entrant.numberOfTickets += 10;
          break;
        case 'erbz':
          entrant.numberOfTickets += 5;
          break;
        case 'healf':
          entrant.numberOfTickets += 2;
          break;
        case 'eternalrose':
          entrant.numberOfTickets += 5;
          break;
        case 'aldrick':
          entrant.numberOfTickets += 5;
          break;
        case 'cornholieo':
          entrant.numberOfTickets += 3;
          break;
        default:
          break;
      }
    });
    return entrants;
  }
}
