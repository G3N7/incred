import { Injectable } from '@angular/core';
import { CodexLookup, Area, Region, CodexTypes, Grade } from './codex-record.data';

@Injectable()
export class CodexLookupService {

  constructor() { }

  getAllCodexOptions(): CodexLookup[] {
    return [
      {
        name: 'Black Fang',
        type: CodexTypes.Atk,
        area: Area.EastTalkingIsland,
        grade: Grade.C,
        region: Region.TalkingIsland
      },
      {
        name: 'Urca',
        type: CodexTypes.MaxMp,
        area: Area.EastTalkingIsland,
        grade: Grade.C,
        region: Region.TalkingIsland
      },
      {
        name: 'Kobaka',
        type: CodexTypes.Penetration,
        area: Area.EastTalkingIsland,
        grade: Grade.C,
        region: Region.TalkingIsland,
      },
      {
        name: 'Silverhorn',
        type: CodexTypes.Def,
        area: Area.EastTalkingIsland,
        grade: Grade.B,
        region: Region.TalkingIsland,
      },
      {
        name: 'Queen Sylop',
        type: CodexTypes.MaxHp,
        area: Area.EastTalkingIsland,
        grade: Grade.B,
        region: Region.TalkingIsland,
      },
      {
        name: 'Bulc',
        type: CodexTypes.Atk,
        area: Area.PlainsOfDion,
        grade: Grade.C,
        region: Region.Dion,
      },
      {
        name: 'Baroque',
        type: CodexTypes.Def,
        area: Area.PlainsOfDion,
        grade: Grade.C,
        region: Region.Dion,
      },
      {
        name: 'Moke',
        type: CodexTypes.MaxHp,
        area: Area.PlainsOfDion,
        grade: Grade.C,
        region: Region.Dion,
      },
      {
        name: 'Thrush',
        type: CodexTypes.MaxHp,
        area: Area.PlainsOfDion,
        grade: Grade.B,
        region: Region.Dion,
      },
      {
        name: 'Krush',
        type: CodexTypes.Penetration,
        area: Area.PlainsOfDion,
        grade: Grade.B,
        region: Region.Dion,
      },
      {
        name: 'Varash',
        type: CodexTypes.Resilience,
        area: Area.PlainsOfDion,
        grade: Grade.B,
        region: Region.Dion,
      },
      {
        name: 'Screash',
        type: CodexTypes.CritRate,
        area: Area.PlainsOfDion,
        grade: Grade.B,
        region: Region.Dion,
      },
    ];
  }

}
