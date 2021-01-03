import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Position} from '../model/position.model';
import {Profile} from '../model/profile.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getProfiles(): Observable<Profile[]> {
        return this.httpClient
            .get<Position[]>(`${environment.host}/api/profiles/`)
            .pipe(
                catchError(err => {
                    console.error('Error');
                    throw err;
                }),
                tap(console.log)
            )
            .pipe(map(profile => profile.map(p => new Profile(p))));
    }
}
