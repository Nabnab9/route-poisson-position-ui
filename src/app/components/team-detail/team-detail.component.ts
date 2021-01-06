import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import {TeamService} from '../../service/team.service';
import {Team} from '../../model/team.model';
import {filter, first} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: Team;
  center: google.maps.LatLngLiteral;
  teams: Team[];

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
  ) {
    this.teamService.getTeams().subscribe(value => this.teams = value);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teamService.getTeams().subscribe(value => {
        this.teams = value;
        this.team = this.teams.find(team => {
          return team.name === params.name;
        });
        this.center = this.team.positions.sort((a, b) => {
          return Math.abs(new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime());
        }).reverse()[0].coordinates;
      });

    });
  }

}
