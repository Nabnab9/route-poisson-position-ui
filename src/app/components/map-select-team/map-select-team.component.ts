import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Team} from '../../model/team.model';

@Component({
  selector: 'app-map-select-team',
  templateUrl: './map-select-team.component.html',
  styleUrls: ['./map-select-team.component.css']
})
export class MapSelectTeamComponent {

  teams: Team[];
  filteredTeams: Team[];

  selectedTeam: Team;

  selectedTeams: Team[] = [];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: {teams: Team[], filteredTeams: Team[]},
    private bottomsheet: MatBottomSheetRef<MapSelectTeamComponent>
    ) {
    this.teams = data.teams;
    this.filteredTeams = data.filteredTeams;
    this.selectedTeams = this.filteredTeams;
  }



  closeBottomSheet(): void {
    this.bottomsheet.dismiss(this.selectedTeams.map(t => t.name));
  }

  onNgModelChange($event): void{
    this.selectedTeam = $event;

  }

}
