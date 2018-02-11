import { Injectable } from '@angular/core';
import { Entrant } from './lotto/entrant.dto';

@Injectable()
export class RosterService {
  constructor() {}

  getRoster(): string[] {
    return [
      'Acantha',
      'ErBz',
      'KingInferno',
      'Staticrage',
      'Tsubakiyami',
      'fireytorn',
      'Packster',
      'MrPoopyPants',
      'foxygoddess',
      'EternalRose',
      'SoulSavior',
      'Jetlynk',
      'Templar',
      'Rainne',
      'perspiration',
      'Sun',
      'Shortcake',
      'DantheSQLMan',
      'Healf',
      'Cargez',
      'SexyAlexy',
      'Nautic',
      'MatsuSoul',
      'RangerofGentle',
      'cornholeo',
      'ClubberLane',
      'Ysabela',
      'Aldrick',
      'Rakiten',
      'Kerstt',
      'datboiii',
      'LokirioS',
      'F4nG',
      'Lifeburn',
      'GreenRanger',
      'Powzer',
      'JaysinHighwind',
      'Blueinia',
      '4go101',
      'Vernal',
      'Luc1fer'
    ];
  }
}
