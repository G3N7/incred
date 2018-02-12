import { Injectable } from '@angular/core';
import { Entrant } from './entrant.dto';

@Injectable()
export class TicketOverrideService {
  constructor() {}

  overrideTicketCounts(entrants: Entrant[]) {
    entrants.forEach(entrant => {
      const normalizedName = entrant.name.toLowerCase();
      switch (normalizedName) {
        case 'zrevelation':
          entrant.numberOfTickets = 2;
          break;
        case 'misaa':
          entrant.numberOfTickets = 1;
          break;
        case 'jaysinhighwind':
          entrant.numberOfTickets = 4;
          break;  
        case 'datboiii':
          entrant.numberOfTickets = 4;
          break;
        case 'packster':
          entrant.numberOfTickets = 4;
          break;
        case 'templar':
          entrant.numberOfTickets = 4;
          break;
        case 'acantha':
          entrant.numberOfTickets = 4;
          break;
        case 'lokirios':
          entrant.numberOfTickets = 4;
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
        case 'dantheSQLMan':
          entrant.numberOfTickets += 5;
          break;
        case 'cornholeo':
          entrant.numberOfTickets += 7;
          break;
        case 'f4ng':
          entrant.numberOfTickets += 4;
          break;
        case 'vernal':
          entrant.numberOfTickets += 1;
          break;
        case 'nautic':
          entrant.numberOfTickets += 1;
          break;
        case 'foxygoddess':
          entrant.numberOfTickets += 1;
          break;
        case 'blueinia':
          entrant.numberOfTickets += 1;
          break;
        case 'cyberorganizer':
          entrant.numberOfTickets += 1;
          break;
        case 'cargez':
          entrant.numberOfTickets += 1;
          break;
        case 'shortcake':
          entrant.numberOfTickets += 1;
          break;
        default:
          break;
      }
    });
    return entrants;
  }
}
