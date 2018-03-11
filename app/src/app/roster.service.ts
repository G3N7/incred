import { Injectable } from '@angular/core';
import { Entrant } from './lotto/entrant.dto';

@Injectable()
export class RosterService {
  constructor() {}

  getRoster(): string[] {
    return [
      'Erbz',
      'foxygoddess',
      'Staticrage',
      'Firey',
      'SirGoon',
      'EternalRose',
      'Healf',
      'Acantha',
      'VIBRATE',
      'Menghis',
      'SoulSavior',
      'zRevelation',
      'kerstt',
      'Tsubakiyami',
      'Mrpoopypants',
      'Gentle',
      'F4nG',
      'Valtrex',
      'Sun',
      'Rainne',
      'Blight',
      'SippinHaiderade',
      '4go101',
      'Vernal',
      'x6u7x',
      'Aldrick',
      'Usys',
      'pantiraider86',
      'cornholeo',
      'Blueinia',
      'Packster',
      'evilzyca',
      'mageulook',
      'FriendOfGentle',
      'Shortcake',
      'JetIynk',
      'alexy',
      'RangerOfGentle',
      'LokirioS',
      'cyborganizer',
      'GreenRanger',
      'JaysinHighwind',
      'SexyAlexy',
      'Misaa',
      'Cargez',
      'Kalam',
      'H-ope'
    ];
  }
}
