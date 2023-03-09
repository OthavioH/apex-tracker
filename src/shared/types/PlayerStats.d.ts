export interface Bans {
    isActive: boolean;
    remainingSeconds: number;
    last_banReason: String;
}

export interface Rank {
    rankScore: number;
    rankName: String;
    rankDiv: number;
    ladderPosPlatform: number;
    rankImg: string;
    rankedSeason: String;
}

export interface Arena {
    rankScore: number;
    rankName: String;
    rankDiv: number;
    ladderPosPlatform: number;
    rankImg: String;
    rankedSeason: String;
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
    level: String;
    history: History;
}

export interface Badge {
    name: String;
    value: number;
}

export interface Player {
    name: String;
    uid: number;
    avatar: String;
    platform: String;
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
    lobbyState: String;
    isOnline: number;
    isInGame: number;
    canJoin: number;
    partyFull: number;
    selectedLegend: String;
    currentState: String;
    currentStateSinceTimestamp: number;
    currentStateAsText: String;
}

export interface Datum {
    name: String;
    value: number;
    key: String;
    global: boolean;
}

export interface Badge2 {
    name: String;
    value: number;
    category: String;
}

export interface GameInfo {
    skin: String;
    skinRarity: String;
    frame: String;
    frameRarity: String;
    pose: String;
    poseRarity: String;
    intro: String;
    introRarity: String;
    badges: Badge2[];
}

export interface ImgAssets {
    icon: String;
    banner: String;
}

export interface Selected {
    LegendName: String;
    data: Datum[];
    gameInfo: GameInfo;
    ImgAssets: ImgAssets;
}

export interface ImgAssets2 {
    icon: String;
    banner: String;
}

export interface Revenant {
    ImgAssets: ImgAssets2;
}

export interface ImgAssets3 {
    icon: String;
    banner: String;
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
    name: String;
    value: number;
    key: String;
    rank: Rank2;
    rankPlatformSpecific: RankPlatformSpecific;
}

export interface ImgAssets4 {
    icon: String;
    banner: String;
}

export interface Horizon {
    data: Datum2[];
    ImgAssets: ImgAssets4;
}

export interface ImgAssets5 {
    icon: String;
    banner: String;
}

export interface Gibraltar {
    ImgAssets: ImgAssets5;
}

export interface ImgAssets6 {
    icon: String;
    banner: String;
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
    name: String;
    value: number;
    key: String;
    rank: Rank3;
    rankPlatformSpecific: RankPlatformSpecific2;
}

export interface Badge3 {
    name: String;
    value: number;
}

export interface GameInfo2 {
    badges: Badge3[];
}

export interface ImgAssets7 {
    icon: String;
    banner: String;
}

export interface Fuse {
    data: Datum3[];
    gameInfo: GameInfo2;
    ImgAssets: ImgAssets7;
}

export interface ImgAssets8 {
    icon: String;
    banner: String;
}

export interface Bangalore {
    ImgAssets: ImgAssets8;
}

export interface ImgAssets9 {
    icon: String;
    banner: String;
}

export interface Wraith {
    ImgAssets: ImgAssets9;
}

export interface ImgAssets10 {
    icon: String;
    banner: String;
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
    name: String;
    value: number;
    key: String;
    rank: Rank4;
    rankPlatformSpecific: RankPlatformSpecific3;
}

export interface Badge4 {
    name: String;
    value: number;
}

export interface GameInfo3 {
    badges: Badge4[];
}

export interface ImgAssets11 {
    icon: String;
    banner: String;
}

export interface Bloodhound {
    data: Datum4[];
    gameInfo: GameInfo3;
    ImgAssets: ImgAssets11;
}

export interface ImgAssets12 {
    icon: String;
    banner: String;
}

export interface Caustic {
    ImgAssets: ImgAssets12;
}

export interface ImgAssets13 {
    icon: String;
    banner: String;
}

export interface Lifeline {
    ImgAssets: ImgAssets13;
}

export interface ImgAssets14 {
    icon: String;
    banner: String;
}

export interface Pathfinder {
    ImgAssets: ImgAssets14;
}

export interface Rank5 {
    rankPos: number;
    topPercent: number;
}

export interface RankPlatformSpecific4 {
    rankPos: String;
    topPercent: String;
}

export interface Datum5 {
    name: String;
    value: number;
    key: String;
    rank: Rank5;
    rankPlatformSpecific: RankPlatformSpecific4;
}

export interface Badge5 {
    name: String;
    value: number;
}

export interface GameInfo4 {
    badges: Badge5[];
}

export interface ImgAssets15 {
    icon: String;
    banner: String;
}

export interface Loba {
    data: Datum5[];
    gameInfo: GameInfo4;
    ImgAssets: ImgAssets15;
}

export interface ImgAssets16 {
    icon: String;
    banner: String;
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
    name: String;
    value: number;
    key: String;
    rank: Rank6;
    rankPlatformSpecific: RankPlatformSpecific5;
}

export interface ImgAssets17 {
    icon: String;
    banner: String;
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
    name: String;
    value: number;
    key: String;
    rank: Rank7;
    rankPlatformSpecific: RankPlatformSpecific6;
}

export interface ImgAssets18 {
    icon: String;
    banner: String;
}

export interface Valkyrie {
    data: Datum7[];
    ImgAssets: ImgAssets18;
}

export interface ImgAssets19 {
    icon: String;
    banner: String;
}

export interface Seer {
    ImgAssets: ImgAssets19;
}

export interface ImgAssets20 {
    icon: String;
    banner: String;
}

export interface Ash {
    ImgAssets: ImgAssets20;
}

export interface ImgAssets21 {
    icon: String;
    banner: String;
}

export interface MadMaggie {
    ImgAssets: ImgAssets21;
}

export interface ImgAssets22 {
    icon: String;
    banner: String;
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
    name: String;
    value: number;
    key: String;
    rank: Rank8;
    rankPlatformSpecific: RankPlatformSpecific7;
}

export interface ImgAssets23 {
    icon: String;
    banner: String;
}

export interface Vantage {
    data: Datum8[];
    ImgAssets: ImgAssets23;
}

export interface ImgAssets24 {
    icon: String;
    banner: String;
}

export interface Catalyst {
    ImgAssets: ImgAssets24;
}

export interface Legends {
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
    claimedBy: String;
    APIAccessType: String;
    ClusterID: String;
    rate_limit: RateLimit;
    clusterSrv: String;
}

export interface ALS {
    isALSDataEnabled: boolean;
}

export interface Kills {
    name: String;
    value: number;
}

export interface TeammatesLifted {
    name: String;
    value: number;
}

export interface GamesPlayed {
    name: String;
    value: number;
}

export interface Top3 {
    name: String;
    value: number;
}

export interface KnuckleClusterHits {
    name: String;
    value: number;
}

export interface MotherlodeCaptured {
    name: String;
    value: number;
}

export interface SpecialEventKills {
    name: String;
    value: number;
}

export interface SpecialEventDamage {
    name: String;
    value: number;
}

export interface SpecialEventWins {
    name: String;
    value: number;
}

export interface Kd {
    value: String;
    name: String;
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

export interface User {
    global: Player;
    realtime: Realtime;
    legends: Legends;
    mozambiquehere_internal: MozambiquehereInternal;
    ALS: ALS;
    total: Total;
}