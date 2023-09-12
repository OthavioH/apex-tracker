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
  category: String;
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

export interface GameInfo {
  skin: String;
  skinRarity: String;
  frame: String;
  frameRarity: String;
  pose: String;
  poseRarity: String;
  intro: String;
  introRarity: String;
  badges: Badge[];
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

export interface Revenant {
  ImgAssets: ImgAssets;
}

export interface Crypto {
  ImgAssets: ImgAssets;
}

export interface RankPosition {
  rankPos: number;
  topPercent: number;
}

export interface RankPlatformSpecific {
  rankPos: number;
  topPercent: number;
}

export interface DatumRank {
  name: String;
  value: number;
  key: String;
  rank: RankPosition;
  rankPlatformSpecific: RankPlatformSpecific;
}

export interface Horizon {
  data?: DatumRank[];
  ImgAssets: ImgAssets;
}

export interface Gibraltar {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Wattson {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Fuse {
  data?: DatumRank[];
  ImgAssets: ImgAssets;
}

export interface Bangalore {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Wraith {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Octane {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Rank4 {
  rankPos: number;
  topPercent: number;
}

export interface Bloodhound {
  data: DatumRank[];
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Caustic {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Lifeline {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Pathfinder {
  data?: DatumRank[];
  ImgAssets: ImgAssets;
}

export interface Rank5 {
  rankPos: number;
  topPercent: number;
}

export interface Loba {
  data?: DatumRank[];
  ImgAssets: ImgAssets;
}

export interface Mirage {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Rank6 {
  rankPos: number;
  topPercent: number;
}

export interface Rampart {
  data?: DatumRank[];
  ImgAssets: ImgAssets;
}

export interface Rank7 {
  rankPos: number;
  topPercent: number;
}

export interface Valkyrie {
  data?: DatumRank[];
  ImgAssets: ImgAssets;
}

export interface Seer {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Ash {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface MadMaggie {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Newcastle {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface Rank8 {
  rankPos: number;
  topPercent: number;
}

export interface RankPlatformSpecific7 {
  rankPos: number;
  topPercent: number;
}

export interface Vantage {
  data?: DatumRank[];
  ImgAssets: ImgAssets;
}

export interface Catalyst {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface LegendStructure {
  ImgAssets: ImgAssets;
  data?: DatumRank[];
}

export interface LegendsAll {
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
  all: LegendsAll;
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
