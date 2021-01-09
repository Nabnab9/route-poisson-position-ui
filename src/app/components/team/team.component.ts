import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../model/team.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input() team: Team;

  baseUrl = `gpslogger://properties/${environment.host}/api/properties/`;

  constructor(private domSanitizer: DomSanitizer) { }

  getUrl(): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${this.baseUrl}${encodeURIComponent(this.team.name)}.properties`);
  }

}
