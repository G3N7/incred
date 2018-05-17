import { Injectable } from '@angular/core';
import { Entrant } from './entrant.dto';
import { ShuffleService } from './shuffle.service';
import { RandomNumberService } from './random-number.service';

@Injectable()
export class PickWinnerService {
  constructor(private shuffleService: ShuffleService,
  private randomNumberService: RandomNumberService) {}

  pickWinner(entrants: Entrant[]): Entrant {
    const allEntries = [];

    entrants.forEach(entrant => {
      for (let i = 0; i < entrant.numberOfTickets; i++) {
        allEntries.push(entrant);
      }
    });

    const numberOfTotalEntries = allEntries.length;
    const shuffledEntries = this.shuffleService.shuffle(allEntries);

    const winningNumber = this.randomNumberService.getRandom(numberOfTotalEntries);

    return shuffledEntries[winningNumber];
  }
}
