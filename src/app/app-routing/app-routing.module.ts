import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoogleMapComponent} from '../google-map/google-map.component';

const routes: Routes = [
  {
    path: 'carte',
    component: GoogleMapComponent,
  },
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
