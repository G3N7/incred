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
      'Kerstt',
      'datboiii',
      'LokirioS',
      'F4nG',
      'GreenRanger',
      'JaysinHighwind',
      'Blueinia',
      '4go101',
      'Vernal',
      'cyberorganizer',
      'Misaa',
      'zRevelation'
    ];
  }
}
