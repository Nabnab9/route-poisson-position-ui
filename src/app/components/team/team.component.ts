import {Component, Input, OnInit, Output} from '@angular/core';
import {Team} from '../../model/team.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';
import {TeamAddDialogComponent} from '../team-add-dialog/team-add-dialog.component';
import {TeamService} from '../../service/team.service';
import {MatDialog} from '@angular/material/dialog';
import {EventEmitter} from 'events';
import {TeamDeleteDialogComponent} from '../team-delete-dialog/team-delete-dialog.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input() team: Team;
  @Output() teamDeleted = new EventEmitter<Team>();

  baseUrl = `gpslogger://properties/${environment.host}/api/properties/`;

  constructor(private domSanitizer: DomSanitizer,
              private teamService: TeamService,
              public dialog: MatDialog,
  ) {  }

  getUrl(): SafeResourceUrl {
    return this.domSanitizer
      .bypassSecurityTrustResourceUrl(`${this.baseUrl}${encodeURIComponent(this.team.name)}.properties`);
  }


  openDeleteTeamDialog(): void {
    this.dialog.open(TeamDeleteDialogComponent, {data: {teamToDelete: this.team}})
      .afterClosed()
      .subscribe((result: { teamDeleted: Team }) => {
        this.teamDeleted.emit(result.teamDeleted);
      });
  }

}
