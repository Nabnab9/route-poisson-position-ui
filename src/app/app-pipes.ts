import {NgModule, Pipe, PipeTransform} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GoogleMapComponent} from './components/google-map/google-map.component';
import {PageNotFoundComponent} from './components/page-not-found-component/page-not-found.component';
import {TeamManagementComponent} from './components/team-management/team-management.component';
import {TeamDetailComponent} from './components/team-detail/team-detail.component';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({name: 'urlEncode'})
export class EncodeUriComponentPipe implements PipeTransform {
  transform(value: string): string {
    return encodeURIComponent(value);
  }
}

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [
    EncodeUriComponentPipe,
    SafeUrlPipe,
  ],
  exports: [
    EncodeUriComponentPipe,
    SafeUrlPipe,
  ]
})
export class ApplicationPipesModule {
}

