import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {GoogleMapsModule} from '@angular/google-maps';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
      MaterialModule,
      GoogleMapsModule,
      FlexLayoutModule,
      HttpClientModule
    ],
    exports: [
      MaterialModule,
      GoogleMapsModule,
      FlexLayoutModule,
      HttpClientModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: []
})

export class SharedModule {
}
