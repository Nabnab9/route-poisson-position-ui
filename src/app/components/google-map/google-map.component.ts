import { Component } from '@angular/core';
import {PositionService} from '../../service/position.service';
import {Position} from '../../model/position.model';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  center: google.maps.LatLngLiteral = {lat: 48.3517387, lng: 0.3813534};

  positions: Position[];

  constructor(private positionService: PositionService) {
    this.positionService.getPositions().subscribe(
      (positions: Position[]) => {
        this.positions = positions;
      }
    );
  }
}
