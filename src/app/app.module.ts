import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { NavigationComponent } from './components/navigation-component/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {GoogleMapsModule} from '@angular/google-maps';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Position} from './model/position.model';
import {PositionService} from './service/position.service';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GoogleMapComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    GoogleMapsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
