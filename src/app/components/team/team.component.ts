import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../model/profile.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() profile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
