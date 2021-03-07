import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Team} from '../../model/team.model';
import {TeamService} from '../../service/team.service';

@Component({
  selector: 'app-team-add-dialog',
  templateUrl: './team-add-dialog.component.html',
  styleUrls: ['./team-add-dialog.component.css']
})
export class TeamAddDialogComponent implements OnInit {

  team: Team;

  constructor(
    public dialogRef: MatDialogRef<TeamAddDialogComponent>,
    private teamService: TeamService,
  ) {

  }

  ngOnInit(): void {
    this.team = new Team({positions: []});
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddTeam(): void {
    console.log(this.team);
    this.teamService
      .postTeam(this.team)
      .subscribe(t => {
        this.dialogRef.close({teamAdded: this.team});
      });
  }
}
