import {Position} from './position.model';

export class Team {
  battery: number;
  name: string;
  positions: Position[];
  letter: string;
  markerOptions: google.maps.MarkerOptions;

  constructor(team: any) {
    this.battery = team.battery;
    this.name = team.name;
    this.positions = team.positions.map(p => new Position(p));
    this.letter = team.letter;
    // full list here https://sites.google.com/site/gmapsdevelopment/
    this.markerOptions = {
      icon: {
        url: `http://maps.google.com/mapfiles/kml/paddle/${this.letter}-lv.png`
      }
    };
  }
}
