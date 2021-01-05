import {Position} from './position.model';

export class Team {
  battery: number;
  name: string;
  positions: Position[];

  constructor(team: any) {
    this.battery = team.battery;
    this.name = team.name;
    this.positions = team.positions.map(p => new Position(p));
  }
}
