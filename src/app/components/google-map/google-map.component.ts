import { Component } from '@angular/core';
import {TeamService} from '../../service/team.service';
import {Team} from '../../model/team.model';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {MapSelectTeamComponent} from '../map-select-team/map-select-team.component';

// more documentation here : https://github.com/angular/components/tree/master/src/google-maps
// and here : https://developers.google.com/maps/documentation/javascript/reference
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  center: google.maps.LatLngLiteral = {lat: 47.9967429, lng: 0.1932251};

  teams: Team[];
  filteredTeams: Team[];

  namesToFilter: string[];

  options = {
    center: {lat: 47.9967429, lng: 0.1932251},
    disableDefaultUI: true,
    backgroundColor: '#c2185b',
    clickableIcons: false,
    fullscreenControl: true,
    zoomControl: true,
  };

  constructor(
    public teamService: TeamService,
    private bottomSheet: MatBottomSheet
  ) {
    this.teamService.getTeams().subscribe(value => {
      this.teams = value;
      this.filteredTeams = value;
      if (this.namesToFilter) {
        this.filteredTeams = value.filter(t => this.namesToFilter.includes(t.name));
      }
    });
  }

  openBottomSheet(): void {
    const bottomSheetRef = this.bottomSheet.open(MapSelectTeamComponent, {
      data: {
        teams: this.teams,
        filteredTeams: this.filteredTeams
      },
    });
    bottomSheetRef.afterDismissed().subscribe(dataFromBottomSheet => {
      this.namesToFilter = dataFromBottomSheet;
      this.filteredTeams = this.teams.filter(t => this.namesToFilter.includes(t.name));
    });
  }
}
