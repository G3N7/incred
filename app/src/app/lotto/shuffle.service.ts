import { Injectable } from '@angular/core';
import { Entrant } from './entrant.dto';

@Injectable()
export class ShuffleService {

  constructor() { }

  shuffle(entries: Entrant[]) {
    const entrantsToShuffle = entries.slice(0, entries.length);
    let currentIndex = entrantsToShuffle.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = entrantsToShuffle[currentIndex];
      entrantsToShuffle[currentIndex] = entrantsToShuffle[randomIndex];
      entrantsToShuffle[randomIndex] = temporaryValue;
    }

    return entrantsToShuffle;
  }
}
