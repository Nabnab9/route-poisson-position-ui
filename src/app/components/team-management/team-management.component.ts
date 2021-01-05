import { Component, OnInit } from '@angular/core';
import {PositionService} from '../../service/position.service';
import {Position} from '../../model/position.model';
import {TeamService} from '../../service/team.service';
import {Team} from '../../model/team.model';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent {

  teams: Team[];

  constructor(private teamService: TeamService) {
    this.teamService.getTeams().subscribe(
      (teams: Team[]) => {
        this.teams = teams;
      }
    );
  }

}
