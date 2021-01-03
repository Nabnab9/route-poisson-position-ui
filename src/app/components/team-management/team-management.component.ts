import { Component, OnInit } from '@angular/core';
import {PositionService} from '../../service/position.service';
import {Position} from '../../model/position.model';
import {ProfileService} from '../../service/profile.service';
import {Profile} from '../../model/profile.model';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent {

  profiles: Profile[];

  constructor(private profileService: ProfileService) {
    this.profileService.getProfiles().subscribe(
      (profiles: Profile[]) => {
        this.profiles = profiles;
      }
    );
  }

}
