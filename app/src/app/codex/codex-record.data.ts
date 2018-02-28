export class CodexRecord {
    name: string;
    levelComplete: number;
}

export class CodexLookup {
    name: string;
    type: CodexTypes;
    area: Area;
    region: Region;
    grade: Grade;
}

export enum Grade {
    C = 'C',
    B = 'B',
    A = 'A',
    S = 'S',
    R = 'R',
}

export enum Area {
    EastTalkingIsland = 'East Talking Island',
    WestTalkingIsland = 'West Talking Island',
    ElvenRuinsFloor1 = 'Elven Ruins Floor 1',
    ElvenRuinsFloor2 = 'Elven Ruins Floor 2',
    GludinHighway = 'Gludin Highway',
    GludioPlains = 'Gludio Plains',
    WindawoodManor = 'Windawood Manor',
    Wastelands = 'Wastelands',
    AntNestCatacomb1 = 'Ant Nest Catacomb 1',
    AntNestCatacomb2 = 'Ant Nest Catacomb 2',
    PlainsOfDion = 'Plains of Dion',
    CrumaSwamp = 'Cruma Swamp',
    SummitOfDissonance = 'Summit of Dissonance',
    ShriekingHallows = 'Shrieking Hallows',
    CrumaTowerFloor2 = 'Cruma Tower Floor 2',
    CrumaTowerFloor3 = 'Cruma Tower Floor 3',
    GiranDominion = 'Giran Dominion',
    DeathlyFogShores = 'Deathly Fog Shores',
    DevilsIsle = 'Devil\'s Isle',
    HauntedNecropolis = 'Haunted Necropolis',
    IvoryTowerCatacomb1 = 'Ivory Tower Catacomb 1',
    IvoryTowerCatacomb2 = 'Ivory Tower Catacomb 2',
    IvoryTowerCatacomb3 = 'Ivory Tower Catacomb 3',
}

export enum Region {
    TalkingIsland = 'Talking Island',
    Gludio = 'Gludio',
    Dion = 'Dion',
    Gludin = 'Gludin',
}
export enum CodexTypes {
    Atk = 'Atk',
    Def = 'Def',
    Penetration = 'Penetration',
    Resilience = 'Resilience',
    Accuracy = 'Accuracy',
    Evasion = 'Evasion',
    MaxHp = 'Max HP',
    MaxMp = 'Max MP',
    CritRate = 'Crit. Rate',
    CritResist = 'Crit. Resist'
}