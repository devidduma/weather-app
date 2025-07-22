export class Location {
  name!: string;
  local_names!: Object;
  lat!: number;
  lon!: number;
  country!: string;
  state!: string;

  printLoc(): string {
    return `${this.name}${this.state ? ", " + this.state : ""}, ${this.country}`;
  }
}
