import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {GoogleMapComponent} from './google-map/google-map.component';
import {PageNotFoundComponent} from './page-not-found-component/page-not-found.component';
import {TeamManagementComponent} from './team-management/team-management.component';
import {AppRoutingModule} from '../app-routing.module';
import {PositionService} from '../service/position.service';
import {TeamService} from '../service/team.service';
import { TeamComponent } from './team/team.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MapSelectTeamComponent } from './map-select-team/map-select-team.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    GoogleMapComponent,
    PageNotFoundComponent,
    TeamManagementComponent,
    TeamComponent,
    TeamDetailComponent,
    MapSelectTeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PositionService, TeamService]
})
export class ComponentModule { }
