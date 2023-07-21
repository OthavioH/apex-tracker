export default class Platform extends String {
  platformId: string;

  constructor(platformId: string) {
    super();
    this.platformId = platformId;
  }

  platformIdToString(): string {
    switch (this.platformId) {
      case "PC":
        return "PC";
      case "PS4":
        return "Playstation";
      case "X1":
        return "Xbox";
      case "SWITCH":
        return "Nintendo Switch";
      default:
        return "PC";
    }
  }

  platformIdToPlaceHolder(): string {
    switch (this.platformId) {
      case "PC":
        return "Origin";
      case "PS4":
        return "PSN";
      case "X1":
        return "Xbox";
      case "SWITCH":
        return "Nintendo";
      default:
        return "Origin";
    }
  }

  toDropdownWidth(): string {
    switch (this.platformId) {
      case "X1":
        return "100px";
      case "PS4":
        return "120px";
      case "SWITCH":
        return "150px";
      default:
        return "70px";
    }
  }
}
