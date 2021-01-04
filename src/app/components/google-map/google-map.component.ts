import { Component } from '@angular/core';
import {PositionService} from '../../service/position.service';
import {Position} from '../../model/position.model';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  center: google.maps.LatLngLiteral = {lat: 47.9967429, lng: 0.1932251};

  positions: Position[];

  constructor(private positionService: PositionService) {
    this.positionService.getPositions().subscribe(
      (positions: Position[]) => {
        this.positions = positions;
      }
    );
  }
}
