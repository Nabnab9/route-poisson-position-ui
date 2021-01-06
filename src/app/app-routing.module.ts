import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoogleMapComponent} from './components/google-map/google-map.component';
import {PageNotFoundComponent} from './components/page-not-found-component/page-not-found.component';
import {TeamManagementComponent} from './components/team-management/team-management.component';
import {TeamDetailComponent} from './components/team-detail/team-detail.component';

const routes: Routes = [
  { path: '',   redirectTo: '/carte', pathMatch: 'full' },
  {
    path: 'carte',
    component: GoogleMapComponent,
  },
  {
    path: 'gestion-equipe',
    component: TeamManagementComponent
  },
  {
    path: 'gestion-equipe/:name',
    component: TeamDetailComponent
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
