import {Component} from '@angular/core';
import {TeamService} from '../../service/team.service';
import {Team} from '../../model/team.model';
import {MatDialog} from '@angular/material/dialog';
import {TeamAddDialogComponent} from '../team-add-dialog/team-add-dialog.component';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent {

  teams: Team[];

  constructor(
    private teamService: TeamService,
    public dialog: MatDialog,
    ) {
    this.teamService.getTeams().subscribe(value => this.teams = value);
  }

  openAddTeamDialog(): void {
    const dialogRef = this.dialog.open(TeamAddDialogComponent);

    // dialogRef.afterClosed().subscribe();
  }
}
