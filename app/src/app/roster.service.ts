import { Injectable } from '@angular/core';
import { Entrant } from './lotto/entrant.dto';

@Injectable()
export class RosterService {
  constructor() { }

  getRoster(): string[] {
    return [
      "807",
      "293",
      "601",
      "369",
      "855",
      "438",
      "799",
      "645",
      "976",
      "934",
      "513",
      "763",
      "830",
      "735"
    ];
  }
}
