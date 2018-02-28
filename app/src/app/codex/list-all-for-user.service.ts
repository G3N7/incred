import { Injectable } from '@angular/core';
import { CodexRecord } from './codex-record.data';

@Injectable()
export class ListAllForUserService {
  constructor() {}

  listAll(): CodexRecord[] {
    return [
      {
        name: 'Urca',
        levelComplete: 10
      },
      {
        name: 'Moke',
        levelComplete: 10
      },
      {
        name: 'Thrush',
        levelComplete: 5
      },
    ];
  }
}
