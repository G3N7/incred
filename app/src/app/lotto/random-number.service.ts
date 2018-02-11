import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {

  constructor() { }

  getRandom(upperBound: number) {
    return Math.floor(Math.random() * upperBound);
  }
}
