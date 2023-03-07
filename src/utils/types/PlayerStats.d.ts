export interface Bans {
    isActive: boolean;
    remainingSeconds: number;
    last_banReason: string;
}

export interface Rank {
    rankScore: number;
    rankName: string;
    rankDiv: number;
    ladderPosPlatform: number;
    rankImg: string;
    rankedSeason: string;
}

export interface Arena {
    rankScore: number;
    rankName: string;
    rankDiv: number;
    ladderPosPlatform: number;
    rankImg: string;
    rankedSeason: string;
}

export interface History {
    season1: number;
    season2: number;
    season3: number;
    season4: number;
    season5: number;
    season6: number;
    season7: number;
    season8: number;
    season9: number;
    season10: number;
    season11: number;
    season12: number;
    season13: number;
    season14: number;
}

export interface Battlepass {
    level: string;
    history: History;
}

export interface Badge {
    name: string;
    value: number;
}

export interface Global {
    name: string;
    uid: number;
    avatar: string;
    platform: string;
    level: number;
    toNextLevelPercent: number;
    internalUpdateCount: number;
    bans: Bans;
    rank: Rank;
    arena: Arena;
    battlepass: Battlepass;
    internalParsingVersion: number;
    badges: Badge[];
    levelPrestige: number;
}

export interface Realtime {
    lobbyState: string;
    isOnline: number;
    isInGame: number;
    canJoin: number;
    partyFull: number;
    selectedLegend: string;
    currentState: string;
    currentStateSinceTimestamp: number;
    currentStateAsText: string;
}

export interface Datum {
    name: string;
    value: number;
    key: string;
    global: boolean;
}

export interface Badge2 {
    name: string;
    value: number;
    category: string;
}

export interface GameInfo {
    skin: string;
    skinRarity: string;
    frame: string;
    frameRarity: string;
    pose: string;
    poseRarity: string;
    intro: string;
    introRarity: string;
    badges: Badge2[];
}

export interface ImgAssets {
    icon: string;
    banner: string;
}

export interface Selected {
    LegendName: string;
    data: Datum[];
    gameInfo: GameInfo;
    ImgAssets: ImgAssets;
}

export interface ImgAssets2 {
    icon: string;
    banner: string;
}

export interface Revenant {
    ImgAssets: ImgAssets2;
}

export interface ImgAssets3 {
    icon: string;
    banner: string;
}

export interface Crypto {
    ImgAssets: ImgAssets3;
}

export interface Rank2 {
    rankPos: number;
    topPercent: number;
}

export interface RankPlatformSpecific {
    rankPos: number;
    topPercent: number;
}

export interface Datum2 {
    name: string;
    value: number;
    key: string;
    rank: Rank2;
    rankPlatformSpecific: RankPlatformSpecific;
}

export interface ImgAssets4 {
    icon: string;
    banner: string;
}

export interface Horizon {
    data: Datum2[];
    ImgAssets: ImgAssets4;
}

export interface ImgAssets5 {
    icon: string;
    banner: string;
}

export interface Gibraltar {
    ImgAssets: ImgAssets5;
}

export interface ImgAssets6 {
    icon: string;
    banner: string;
}

export interface Wattson {
    ImgAssets: ImgAssets6;
}

export interface Rank3 {
    rankPos: number;
    topPercent: number;
}

export interface RankPlatformSpecific2 {
    rankPos: any;
    topPercent: any;
}

export interface Datum3 {
    name: string;
    value: number;
    key: string;
    rank: Rank3;
    rankPlatformSpecific: RankPlatformSpecific2;
}

export interface Badge3 {
    name: string;
    value: number;
}

export interface GameInfo2 {
    badges: Badge3[];
}

export interface ImgAssets7 {
    icon: string;
    banner: string;
}

export interface Fuse {
    data: Datum3[];
    gameInfo: GameInfo2;
    ImgAssets: ImgAssets7;
}

export interface ImgAssets8 {
    icon: string;
    banner: string;
}

export interface Bangalore {
    ImgAssets: ImgAssets8;
}

export interface ImgAssets9 {
    icon: string;
    banner: string;
}

export interface Wraith {
    ImgAssets: ImgAssets9;
}

export interface ImgAssets10 {
    icon: string;
    banner: string;
}

export interface Octane {
    ImgAssets: ImgAssets10;
}

export interface Rank4 {
    rankPos: number;
    topPercent: number;
}

export interface RankPlatformSpecific3 {
    rankPos: number;
    topPercent: number;
}

export interface Datum4 {
    name: string;
    value: number;
    key: string;
    rank: Rank4;
    rankPlatformSpecific: RankPlatformSpecific3;
}

export interface Badge4 {
    name: string;
    value: number;
}

export interface GameInfo3 {
    badges: Badge4[];
}

export interface ImgAssets11 {
    icon: string;
    banner: string;
}

export interface Bloodhound {
    data: Datum4[];
    gameInfo: GameInfo3;
    ImgAssets: ImgAssets11;
}

export interface ImgAssets12 {
    icon: string;
    banner: string;
}

export interface Caustic {
    ImgAssets: ImgAssets12;
}

export interface ImgAssets13 {
    icon: string;
    banner: string;
}

export interface Lifeline {
    ImgAssets: ImgAssets13;
}

export interface ImgAssets14 {
    icon: string;
    banner: string;
}

export interface Pathfinder {
    ImgAssets: ImgAssets14;
}

export interface Rank5 {
    rankPos: number;
    topPercent: number;
}

export interface RankPlatformSpecific4 {
    rankPos: string;
    topPercent: string;
}

export interface Datum5 {
    name: string;
    value: number;
    key: string;
    rank: Rank5;
    rankPlatformSpecific: RankPlatformSpecific4;
}

export interface Badge5 {
    name: string;
    value: number;
}

export interface GameInfo4 {
    badges: Badge5[];
}

export interface ImgAssets15 {
    icon: string;
    banner: string;
}

export interface Loba {
    data: Datum5[];
    gameInfo: GameInfo4;
    ImgAssets: ImgAssets15;
}

export interface ImgAssets16 {
    icon: string;
    banner: string;
}

export interface Mirage {
    ImgAssets: ImgAssets16;
}

export interface Rank6 {
    rankPos: number;
    topPercent: number;
}

export interface RankPlatformSpecific5 {
    rankPos: number;
    topPercent: number;
}

export interface Datum6 {
    name: string;
    value: number;
    key: string;
    rank: Rank6;
    rankPlatformSpecific: RankPlatformSpecific5;
}

export interface ImgAssets17 {
    icon: string;
    banner: string;
}

export interface Rampart {
    data: Datum6[];
    ImgAssets: ImgAssets17;
}

export interface Rank7 {
    rankPos: number;
    topPercent: number;
}

export interface RankPlatformSpecific6 {
    rankPos: number;
    topPercent: number;
}

export interface Datum7 {
    name: string;
    value: number;
    key: string;
    rank: Rank7;
    rankPlatformSpecific: RankPlatformSpecific6;
}

export interface ImgAssets18 {
    icon: string;
    banner: string;
}

export interface Valkyrie {
    data: Datum7[];
    ImgAssets: ImgAssets18;
}

export interface ImgAssets19 {
    icon: string;
    banner: string;
}

export interface Seer {
    ImgAssets: ImgAssets19;
}

export interface ImgAssets20 {
    icon: string;
    banner: string;
}

export interface Ash {
    ImgAssets: ImgAssets20;
}

export interface ImgAssets21 {
    icon: string;
    banner: string;
}

export interface MadMaggie {
    ImgAssets: ImgAssets21;
}

export interface ImgAssets22 {
    icon: string;
    banner: string;
}

export interface Newcastle {
    ImgAssets: ImgAssets22;
}

export interface Rank8 {
    rankPos: number;
    topPercent: number;
}

export interface RankPlatformSpecific7 {
    rankPos: number;
    topPercent: number;
}

export interface Datum8 {
    name: string;
    value: number;
    key: string;
    rank: Rank8;
    rankPlatformSpecific: RankPlatformSpecific7;
}

export interface ImgAssets23 {
    icon: string;
    banner: string;
}

export interface Vantage {
    data: Datum8[];
    ImgAssets: ImgAssets23;
}

export interface ImgAssets24 {
    icon: string;
    banner: string;
}

export interface Catalyst {
    ImgAssets: ImgAssets24;
}

export interface All {
    Revenant: Revenant;
    Crypto: Crypto;
    Horizon: Horizon;
    Gibraltar: Gibraltar;
    Wattson: Wattson;
    Fuse: Fuse;
    Bangalore: Bangalore;
    Wraith: Wraith;
    Octane: Octane;
    Bloodhound: Bloodhound;
    Caustic: Caustic;
    Lifeline: Lifeline;
    Pathfinder: Pathfinder;
    Loba: Loba;
    Mirage: Mirage;
    Rampart: Rampart;
    Valkyrie: Valkyrie;
    Seer: Seer;
    Ash: Ash;
    MadMaggie: MadMaggie;
    Newcastle: Newcastle;
    Vantage: Vantage;
    Catalyst: Catalyst;
}

export interface Legends {
    selected: Selected;
    all: any;
}

export interface RateLimit {
    max_per_second: number;
    current_req?: any;
}

export interface MozambiquehereInternal {
    isNewToDB: boolean;
    claimedBy: string;
    APIAccessType: string;
    ClusterID: string;
    rate_limit: RateLimit;
    clusterSrv: string;
}

export interface ALS {
    isALSDataEnabled: boolean;
}

export interface Kills {
    name: string;
    value: number;
}

export interface TeammatesLifted {
    name: string;
    value: number;
}

export interface GamesPlayed {
    name: string;
    value: number;
}

export interface Top3 {
    name: string;
    value: number;
}

export interface KnuckleClusterHits {
    name: string;
    value: number;
}

export interface MotherlodeCaptured {
    name: string;
    value: number;
}

export interface SpecialEventKills {
    name: string;
    value: number;
}

export interface SpecialEventDamage {
    name: string;
    value: number;
}

export interface SpecialEventWins {
    name: string;
    value: number;
}

export interface Kd {
    value: string;
    name: string;
}

export interface Total {
    kills: Kills;
    teammates_lifted: TeammatesLifted;
    games_played: GamesPlayed;
    top_3: Top3;
    knuckle_cluster_hits: KnuckleClusterHits;
    motherlode_captured: MotherlodeCaptured;
    specialEvent_kills: SpecialEventKills;
    specialEvent_damage: SpecialEventDamage;
    specialEvent_wins: SpecialEventWins;
    kd: Kd;
}

export interface RootObject {
    global: Global;
    realtime: Realtime;
    legends: Legends;
    mozambiquehere_internal: MozambiquehereInternal;
    ALS: ALS;
    total: Total;
}