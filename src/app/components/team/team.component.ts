import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../model/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
