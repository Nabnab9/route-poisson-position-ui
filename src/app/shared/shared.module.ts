import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {GoogleMapsModule} from '@angular/google-maps';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {ApplicationPipesModule} from '../app-pipes';

@NgModule({
    imports: [
      MaterialModule,
      GoogleMapsModule,
      FlexLayoutModule,
      HttpClientModule,
      ApplicationPipesModule
    ],
    exports: [
      MaterialModule,
      GoogleMapsModule,
      FlexLayoutModule,
      HttpClientModule,
      ApplicationPipesModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: []
})

export class SharedModule {
}
