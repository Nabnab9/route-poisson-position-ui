import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Team} from '../../model/team.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TeamService} from '../../service/team.service';

export interface DeleteInfo {
  teamToDelete: Team;
}

@Component({
  selector: 'app-team-delete-dialog',
  templateUrl: './team-delete-dialog.component.html',
  styleUrls: ['./team-delete-dialog.component.css']
})
export class TeamDeleteDialogComponent {

  team: Team;

  constructor(
    public dialogRef: MatDialogRef<TeamDeleteDialogComponent>,
    private teamService: TeamService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: DeleteInfo
  ) {
    this.team = data.teamToDelete;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeleteTeam(): void {
    this.teamService
      .deleteTeam(this.team.id)
      .subscribe(t => {
        this.dialogRef.close({teamDeleted: this.team});
      });
  }

}
