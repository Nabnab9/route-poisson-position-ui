import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {GoogleMapComponent} from './google-map/google-map.component';
import {PageNotFoundComponent} from './page-not-found-component/page-not-found.component';
import {TeamManagementComponent} from './team-management/team-management.component';
import {AppRoutingModule} from '../app-routing.module';
import {PositionService} from '../service/position.service';
import {ProfileService} from '../service/profile.service';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    GoogleMapComponent,
    PageNotFoundComponent,
    TeamManagementComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [PositionService, ProfileService]
})
export class ComponentModule { }
