import { Component } from '@angular/core';
import {PositionService} from '../../service/position.service';
import {TeamService} from '../../service/team.service';
import {Team} from '../../model/team.model';

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

  // full list here https://sites.google.com/site/gmapsdevelopment/
  markerOptions: google.maps.MarkerOptions = {
    icon: {
      url: 'http://maps.google.com/mapfiles/kml/paddle/10-lv.png'
    }
  };

  constructor(private positionService: PositionService,
              public teamService: TeamService) {
    this.teamService.getTeams().subscribe(value => this.teams = value);
  }
}
