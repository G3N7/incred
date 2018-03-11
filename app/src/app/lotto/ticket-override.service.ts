import { Injectable } from '@angular/core';
import { Entrant } from './entrant.dto';

@Injectable()
export class TicketOverrideService {
  constructor() {}

  overrideTicketCounts(entrants: Entrant[]) {
    entrants.forEach(entrant => {
      const normalizedName = entrant.name.toLowerCase();
      switch (normalizedName) {
        default:
          break;
      }
    });
    return entrants;
  }
}
