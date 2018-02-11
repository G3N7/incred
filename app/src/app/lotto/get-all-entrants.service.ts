import { Injectable } from '@angular/core';
import { Entrant } from './entrant.dto';
import { promise } from 'selenium-webdriver';
import { Promise } from 'q';
import { RosterService } from '../roster.service';
import { AvatarLookupService } from '../avatar-lookup.service';
import { TicketOverrideService } from './ticket-override.service';

@Injectable()
export class GetAllEntrantsService {
  private defaultTicketCount = 7;

  constructor(
    private _rosterService: RosterService,
    private _avatarLookupService: AvatarLookupService,
    private _ticketOverrideService: TicketOverrideService
  ) {}

  getAllEntrants(): Entrant[] {
    const roster = this._rosterService.getRoster();
    let allEntrants: Entrant[] = [];

    roster.forEach(r => {
      allEntrants.push({
        isCurserSelected: false,
        itemWon: null,
        name: r,
        numberOfTickets: this.defaultTicketCount,
        avatarUri: this._avatarLookupService.lookup(r)
      });
    });

    allEntrants = this._ticketOverrideService.overrideTicketCounts(allEntrants);

    return allEntrants;
  }
}
