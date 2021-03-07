import {Position} from './position.model';
import {Member} from './member.model';

export class Team {
  id: string;
  battery: number;
  name: string;
  positions: Position[];
  letter: string;
  markerOptions: google.maps.MarkerOptions;
  members: Member[];

  constructor(team: any) {
    this.id = team.id;
    this.battery = team.battery;
    this.name = team.name;
    this.positions = team.positions.map(p => new Position(p));
    this.letter = team.letter;
    this.members = team.members;
    // full list here https://sites.google.com/site/gmapsdevelopment/
    this.markerOptions = {
      icon: {
        url: `http://maps.google.com/mapfiles/kml/paddle/${this.letter?.charAt(0)}-lv.png`
      }
    };
  }
}
